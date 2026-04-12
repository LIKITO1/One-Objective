import Lottie from "lottie-react"
import AeroPlane from "../animations/Aero plane.json"
import {Link,useNavigate} from "react-router-dom"
import {useState,useEffect} from "react"
import TrashIcon from "../icons/TrashIcon"
import Card from "../layouts/Card"
import CardDelete from "../layouts/CardDelete"
import Loading from "../layouts/Loading"
import type {tipos} from "../types/CardType"
import {reqBoards,deleteBoard} from "../../services/boardService"
type Board={
    id:number,
    color:string,
    name:string
}
export default function Home(){
    const [boards,setBoards]=useState<Board[]>([])
    const [msg,setMsg]=useState("")
    const [tipo,setTipo]=useState<tipos>("success")
    const [cardDelete,setCardDelete]=useState(false)
    const [cardDeleteId,setCardDeleteId]=useState(0)
    const [cardId,setCardId]=useState(0)
    const [isLoading,setIsLoading]=useState(false)
    const navigate=useNavigate()
    function trash(idBoard:number){
        setCardDelete(true)
        setCardDeleteId(idBoard)
        setCardId((e)=>e+1)
    }
    function boardClick(idBoard:number){
        navigate(`/board/${idBoard}`)
    }
    async function excluir(){
        try{
        setIsLoading(true)
        const res=await deleteBoard(cardDeleteId)
        setMsg(res.msg)
        setTipo(res.tipo)
        setCardDelete(false)
        setBoards((e)=>e.filter((a)=>a.id!=cardDeleteId))
        }
        catch(err){
            setMsg("Erro ao tentar excluir")
            setTipo("error")
        }
        finally{
            setIsLoading(false)
        }
    }
    async function request(){
        setIsLoading(true)
        const res=await reqBoards()
        try{
            if(res.boards.length>0){
                setBoards(res.boards)
            }
        }catch(e){
            setBoards([])
        }
        finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        request()
    },[])
    return(
        <div className="flex flex-col h-full w-full text-white py-5 items-center">
            <h1 className="font-semibold text-3xl text-center">Quadros</h1>
            {boards.length<=0&&!isLoading&&(
            <div className="flex flex-col gap-3 mt-5 items-center justify-center">
                <Lottie animationData={AeroPlane} loop={true} className="w-4/5"/>
                <p className="font-semibold text-lg">Nenhum quadro criado</p>
            </div>
            )}
            {boards.length>0&&(
            <div className="h-[70%] w-full flex items-center justify-center flex-col">
            {boards.map((valor)=>(
                <div key={valor.id} onClick={()=>boardClick(valor.id)} style={{background:valor.color}} className="w-3/4 h-1/8 my-1 text-white flex items-center justify-around rounded-xl font-semibold text-lg">
                    <div className="w-1/2">{valor.name}</div>
                    <TrashIcon onClick={()=>{trash(valor.id)}}/>
                </div>
            ))}
            </div>
        )}
            <Link to="/addboard" className="w-1/2 bg-green-800 font-semibold p-3 rounded-xl text-lg flex items-center justify-center absolute right-[5%] bottom-[15%]"><span className="text-4xl mb-2">+ &nbsp;</span>Criar Quadro</Link>
            {msg&&msg.length>0&&(
                <Card msg={msg} tipo={tipo}/>
            )}
            {cardDelete&&(
                <CardDelete key={cardId} onClick={excluir}/>
            )}
            {isLoading&&(
                <Loading/>
            )}
        </div>
    )
}
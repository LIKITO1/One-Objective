import {useParams,useNavigate} from "react-router-dom"
import {useEffect,useState} from "react"
import Card from "../layouts/Card"
import type {tipos} from "../types/CardType"
import Lists from "../layouts/Lists"
import Loading from "../layouts/Loading"
import FormAddList from "../layouts/FormAddList"
import { reqBoard } from "../../services/BoardService"
import MenuBoard from "../layouts/MenuBoard"
export default function Board(){
    const {id}=useParams<string>()
    const [color,setColor]=useState("")
    const [msg,setMsg]=useState("")
    const [tipo,setTipo]=useState<tipos>("success")
    const [name,setName]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    const [mostrarAddList,setMostrarAddList]=useState(false)
    const [lists,setLists]=useState([])
    const navigate=useNavigate()
    async function requisitar(){
        if(!id) return;
        try{
        setIsLoading(true)
        const res=await reqBoard(id)
        if(res?.msg){
            setMsg(res.msg)
            setTipo(res.tipo)
            setColor("black")
            setTimeout(()=>{
                navigate("/home")
            },1500)
            return;
        }
        setColor(res.board.color)
        setName(res.board.name)
        setLists(res.lists)
    }catch(err){
        setMsg("Erro ao carregar os boards")
        setTipo("error")
    }finally{
        setIsLoading(false)
    }
    }
    useEffect(()=>{
        requisitar()
    },[])
    return(
        <div className="h-full w-full absolute" style={{background:color}}>
            {mostrarAddList&&(
                <FormAddList board_id={id||""} sumir={!mostrarAddList} fechar={()=>setMostrarAddList(false)} atualizar={requisitar}/>
            )}
            <h1 className="w-full text-center text-4xl font-bold text-white mt-5">{name}</h1>
            <Lists lists={lists}/>
            {msg&&msg.length>0&&(
                <Card msg={msg} tipo={tipo}/>
            )}
            {isLoading&&(
                <Loading/>
            )}
            <MenuBoard openAddList={()=>console.log("clique")}/>
        </div>
    )
}
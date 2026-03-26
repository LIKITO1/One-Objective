import {useParams,useNavigate} from "react-router-dom"
import {useEffect,useState} from "react"
import Card from "../layouts/Card"
import type {tipos} from "../types/CardType"
import HomeIcon from "../icons/HomeIcon"
import AddIcon from "../icons/AddIcon"
import Lists from "../layouts/Lists"
import Loading from "../layouts/Loading"
export default function Board(){
    const {id}=useParams()
    const [color,setColor]=useState("")
    const [msg,setMsg]=useState("")
    const [tipo,setTipo]=useState<tipos>("success")
    const [name,setName]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    const navigate=useNavigate()
    function home(){
        navigate("/home")
    }
    useEffect(()=>{
        async function requisitar(){
            setIsLoading(true)
            const response=await fetch("https://backend-one-objective.onrender.com/board",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({id})
            })
            const res=await response.json()
            setIsLoading(false)
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
        }
        requisitar()
    },[])
    return(
        <div className="h-full w-full absolute" style={{background:color}}>
            <h1 className="w-full text-center text-4xl font-bold text-white mt-5">{name}</h1>
            <Lists/>
            <HomeIcon onClick={home} className="size-13 text-white absolute right-5 bottom-8 bg-blue-800 rounded-2xl p-3 box-content"/>
            {msg&&msg.length>0&&(
                <Card msg={msg} tipo={tipo}/>
            )}
            <AddIcon className="absolute bottom-30 size-15 rounded-2xl text-white bg-gray-700 right-7"/>
            {isLoading&&(
                <Loading/>
            )}
        </div>
    )
}
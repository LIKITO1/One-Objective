import {useState} from "react"
import {useParams,useNavigate} from "react-router-dom"
import {addList} from "../../services/listService"
import Card from "../layouts/Card"
import ReturnButton from "../layouts/ReturnButton"
import type {tipos} from "../types/CardType"
export default function AddList(){
    const [title,setTitle]=useState("")
    const {id}=useParams()
    const [msg,setMsg]=useState("")
    const [tipo,setTipo]=useState<tipos>("success")
    const [cardId,setCardId]=useState(0)
    const navigate=useNavigate()
    async function submitAddList(e:{preventDefault:()=>void}){
        e.preventDefault()
        if(!id) return;
        if(title.length==0){
            setMsg("Preencha o nome da lista")
            setTipo("warning")
            setCardId((e)=>e+1)
            return;
        }
        const res=await addList(title,id)
        setMsg(res.msg)
        setTipo(res.tipo)
        setCardId((e)=>e+1)
        setTimeout(()=>{
            navigate(`/board/${id}`)
        },1000)
    }
    return(
        <div className="w-full h-4/5 flex items-center justify-center flex-col">
            <form onSubmit={submitAddList} className="bg-gray-800 flex items-center justify-center flex-col w-9/10 h-1/2 gap-5 rounded-2xl">
                <h1 className="font-semibold text-white text-2xl text-center">Adicionar Lista</h1>
                <input onChange={(e)=>setTitle(e.target.value)} placeholder="Nome da Lista..." className="outline-0 text-white w-4/5 border p-3 text-lg"/>
                <button className="font-semibold bg-gray-900 text-white p-4 rounded-xl text-lg">Adicionar Lista</button>
            </form>
            {msg&&msg.length>0&&(
                <Card msg={msg} tipo={tipo} key={cardId}/>
            )}
            <ReturnButton tamanho="small"/>
        </div>
    )
}
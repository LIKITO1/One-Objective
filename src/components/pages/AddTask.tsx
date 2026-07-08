import TextareaAutoSize from "react-textarea-autosize"
import MenuBoard from "../layouts/MenuBoard.tsx"
import {useParams} from "react-router-dom"
import {useState} from "react"
import {addTask} from "../../services/taskService.ts"
import Card from "../layouts/Card.tsx"
import type { tipos } from "../types/CardType.ts"
export default function AddTask(){
    const {id}=useParams()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [msg,setMsg]=useState("")
    const [tipo,setTipo]=useState<tipos>("error")
    const [cardId,setCardId]=useState(0)
    async function requisitar(){
        if(!id) return;
            const res=await addTask({id,title,description})
            setMsg(res.msg)
            setTipo(res.tipo)
            setCardId((e)=>e+1)
    }
    return(
        <div className="bg-gray-700 h-full w-full text-white absolute flex items-center py-5 flex-col">
            <div className="w-4/5 bg-gray-900 flex flex-col items-center justify-center pt-3 pb-6 gap-2 rounded-2xl mb-5">
                <h1 className="font-bold text-2xl">Adicionar Tarefa</h1>
                <label className="font-bold text-lg">Título:</label>
                <input type="text" className="outline-0 border border-white rounded-xl h-10 p-2 w-4/5" onChange={(e)=>setTitle(e.target.value)}/>
                <label className="font-bold text-lg">Descrição:</label>
                <TextareaAutoSize minRows={3} className="w-4/5 outline-0 overflow-hidden resize-none border border-white rounded-xl p-2" onChange={(e)=>setDescription(e.target.value)}/>
                <MenuBoard hiddenAdd={true}/>
                <button className="w-4/5 p-2 bg-gray-800 h-1/6 rounded-xl font-semibold text-lg mt-2" onClick={requisitar}>Adicionar Tarefa</button>
            </div>
            {msg&&msg.length>0&&(
                <Card msg={msg} tipo={tipo} key={cardId}/>
            )}
        </div>
    )
}
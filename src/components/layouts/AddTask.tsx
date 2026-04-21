import TextareaAutoSize from "react-textarea-autosize"
import MenuBoard from "./MenuBoard"
import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import {addTask} from "../../services/taskService.ts"
import type {task} from "../types/TaskType.ts"
export default function AddTask(){
    const {id}=useParams()
    const [title,setTitle]=useState<task>("")
    const [description,setDescription]=useState<task>("")
    async function requisitar(){
        const res=await addTask(id)
        console.log(res.msg)
    }
    useEffect(()=>{
        requisitar()
    },[])
    return(
        <div className="w-4/5 bg-gray-900 flex flex-col items-center justify-center pt-3 pb-6 gap-2 rounded-2xl mb-5">
            <h1 className="font-bold text-2xl">Adicionar Tarefa</h1>
            <label className="font-bold text-lg">Título:</label>
            <input type="text" className="outline-0 border border-white rounded-xl h-10 p-2 w-4/5"/>
            <label className="font-bold text-lg">Descrição:</label>
            <TextareaAutoSize minRows={3} className="w-4/5 outline-0 overflow-hidden resize-none border border-white rounded-xl p-2"/>
            <MenuBoard hiddenAdd={true}/>
            <button className="w-4/5 p-2 bg-gray-800 h-1/6 rounded-xl font-semibold text-lg mt-2" onClick={addTask}>Adicionar Tarefa</button>
        </div>
    )
}
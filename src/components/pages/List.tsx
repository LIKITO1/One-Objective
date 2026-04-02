import {useParams} from "react-router-dom"
import AddTask from "../layouts/AddTask"
export default function List(){
    const {id}=useParams()
    async function addTask(){
        const response=await fetch("http://localhost:3000/addTask",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
    return(
        <div className="bg-gray-700 h-full w-full text-white absolute flex items-center py-5 flex-col">
            <AddTask/>
            <button className="w-4/5 p-2 bg-gray-800 h-1/12 rounded-xl font-semibold text-lg" onClick={addTask}>Adicionar Tarefa</button>
        </div>
    )
}
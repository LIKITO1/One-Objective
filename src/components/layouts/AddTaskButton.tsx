import { useNavigate } from "react-router-dom"
export default function AddTaskButton({id}:{id:string}){
    const navigate=useNavigate()
    function redirectTask(){
        navigate(`/addTask/${id}`)
    }
    return(
        <div className="absolute w-full h-full">
            <button className="absolute bottom-37 right-2 p-4 font-semibold text-lg bg-gray-800 rounded-xl text-white" onClick={redirectTask}>Adicionar Tarefa</button>
        </div>
    )
}
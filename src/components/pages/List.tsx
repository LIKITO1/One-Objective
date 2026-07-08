import { useParams,useLocation } from "react-router-dom"
import AddTaskButton from "../layouts/AddTaskButton"
import ReturnButton from "../layouts/ReturnButton"
export default function List(){
    const location=useLocation()
    const {id}=useParams()
    const nameList=location.state?.nameList||""
    return(
        <div className="w-full h-full bg-gray-700 absolute">
            <h1 className="text-2xl font-bold w-full flex items-center justify-center text-white mt-5">Tarefas da Lista {nameList}</h1>
            <div className="text-white">{id}</div>
            {id && <AddTaskButton id={id}/>}
            <ReturnButton tamanho="big"/>
        </div>
    )
}
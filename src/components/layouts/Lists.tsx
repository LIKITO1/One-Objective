import * as taskService from "../../services/taskService"
import {useEffect,useState} from "react"
type List={
    id:number,
    title:string
}
type Task={
    id:number,
    title:string
}
export default function Lists({lists}:{lists:List[]}){
    const [tasks,setTasks]=useState<Task>({})
    async function loadTasks(list_id:number){
        if(!list_id) return;
        const result=await taskService.listTasks(list_id)
        setTasks((prev)=>({
            ...prev,
            [list_id]:result.tasks
        }))
        console.log(result.tasks)
    }
    useEffect(()=>{
        lists.forEach((valor)=>{
            loadTasks(valor.id)
        })
    },[lists])
    function viewList(){
        console.log("Ampliar lista")
    }
    function addTask(idList:number){
        console.log(idList)
        console.log(lists)
    }
    return (
        <div className="w-4/5 h-7/10 flex flex-col items-center gap-3 p-2 overflow-y-scroll mx-auto">
                {lists.map((list)=>(
                <div className="w-4/5 bg-gray-900 gap-2 text-white rounded-2xl flex-col flex items-center justify-center px-2 pb-3" key={list.id}>
                    <div className="w-full" onClick={viewList}>
                    <h1 className="w-full text-center text-xl font-semibold">{list.title}</h1>
                    {tasks[list.id]?.map((valor)=>(
                        <div className="bg-gray-800 w-full">{valor.id}</div>
                    ))}
                    </div>
                    <button className="bg-gray-700 w-full font-bold text-xl" onClick={()=>addTask(list.id)}>+</button>
                </div>
                ))}
        </div>
    )
}
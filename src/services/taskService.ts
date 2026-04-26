import type {task} from "../components/types/TaskType.ts"
export async function addTask({id,title,description}:task){
        const response=await fetch("https://backend-one-objective.onrender.com/task/add",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id,title,description})
        })
        const res=await response.json()
        return res
}
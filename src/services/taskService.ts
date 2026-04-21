import type {task} from "../types/TaskType.ts"
export async function addTask({id,title,description}:task){
        const response=await fetch("https://backend-one-objective.onrender.com/addTask",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id,title,description})
        })
        const res=await response.json()
        return res
    }
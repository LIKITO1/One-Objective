export async function addList(title:string,board_id:string){
    const response=await fetch("https://backend-one-objective.onrender.com/addList",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({title,board_id})
    })
    const res=await response.json()
    return res
}
export async function reqBoard(id:string){
    const response=await fetch(`https://backend-one-objective.onrender.com/board/${id}`)
    const res=await response.json()
    return res
}
export async function reqBoards(){
    const response=await fetch(`https://backend-one-objective.onrender.com/board/lists/${localStorage.getItem("user_id")}`)
    const res=await response.json()
    return res
}
export async function deleteBoard(id:number){
    const response=await fetch("https://backend-one-objective.onrender.com/board/delete",{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({board_id:id})
    })
    const res=response.json()
    return res
}
export async function addBoard(nameBoard:string,colorBoard:string){
    const response=await fetch("https://backend-one-objective.onrender.com/board/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name:nameBoard,color:colorBoard,user_id:localStorage.getItem("user_id")})
    })
    const res=await response.json()
    return res
}
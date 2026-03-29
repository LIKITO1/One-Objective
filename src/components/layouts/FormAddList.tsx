import {useState} from "react"
type Props={
    board_id:string,
    sumir:boolean,
    fechar:()=>void
}
export default function FormAddList({board_id,sumir,fechar}:Props){
    const [title,setTitle]=useState("")
    function cancelar(){
        fechar()
    }
        async function requisitar(e:{preventDefault:()=>void}){
            e.preventDefault()
            const response=await fetch("https://backend-one-objective.onrender.com/addList",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({title,board_id})
            })
            const res=await response.json()
            console.log(res.msg)
        }
    return(
        <div className={`absolute w-full h-full backdrop-blur-lg z-20 ${sumir?"hidden":"flex"} items-center justify-center`}>
            <form className="w-9/10 h-3/5 bg-gray-800 rounded-2xl flex flex-col items-center justify-center gap-10 text-white" onSubmit={requisitar}>
                <h1 className="text-2xl font-bold">Adicionar Lista</h1>
                <div className="flex flex-col items-center justify-center w-full gap-2">
                <label className="font-semibold text-lg">Título da lista:</label>
                <input type="text" className="w-4/5 outline-0 rounded-2xl p-2 bg-white text-black" onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="flex w-4/5 justify-around items-center">
                <button type="button" className="bg-red-500 font-semibold p-3 rounded-xl" onClick={cancelar}>Cancelar</button>
                <button type="submit" className="bg-black font-semibold p-3 rounded-xl">Criar Lista</button>
                </div>
            </form>
        </div>
    )
}
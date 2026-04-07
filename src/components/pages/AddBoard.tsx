import {useState} from "react"
import Card from "../layouts/Card"
import {useNavigate} from "react-router-dom"
import Loading from "../layouts/Loading"
import type {tipos} from "../types/CardType"
export default function AddBoard(){
    const [nameBoard,setNameBoard]=useState("")
    const [colorBoard,setColorBoard]=useState("")
    const [cardId,setCardId]=useState(0)
    const [msg,setMsg]=useState("")
    const [tipoCard,setTipoCard]=useState<tipos>("success")
    const [isLoading,setIsLoading]=useState(false)
    const navigate=useNavigate()
    const colors= [
        "#ef4444",
        "#f97316",
        "#eab308",
        "#22c55e",
        "#3b82f6",
        "#a855f7"
      ]
    async function submit(e:{preventDefault:()=>void}){
        e.preventDefault()
        if(nameBoard==""){
            setMsg("Digite o nome do quadro")
            setTipoCard("warning")
            setCardId((valor)=>valor+1)
        }
        else if(colorBoard==""){
            setMsg("Escolha uma cor")
            setTipoCard("warning")
            setCardId((valor)=>valor+1)
        }
        else{
            setIsLoading(true)
            const response=await fetch("https://backend-one-objective.onrender.com/addBoard",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name:nameBoard,color:colorBoard,user_id:localStorage.getItem("user_id")})
            })
            const res=await response.json()
            setMsg(res.msg)
            setTipoCard(res.tipo)
            setIsLoading(false)
            setTimeout(()=>{
                navigate("/home")
            },1500)
        }
    }
    return(
        <div className="w-full h-full flex justify-center text-white">
            <form className="w-4/5 h-4/5 flex flex-col mt-[5%] gap-5" onSubmit={submit} noValidate>
                <h1 className="font-bold text-2xl text-center">Adicionar Board</h1>
                <div className="relative w-full my-5">
                    <input placeholder=" " className="w-full border outline-none peer h-12 px-2 text-lg" onChange={(e)=>{setNameBoard(e.target.value)}} required/>
                    <label className="pointer-events-none text-lg absolute top-2 left-2 transition-all duration-200 peer-focus:text-blue-500 peer-focus:backdrop-blur-2xl peer-focus:-top-2.5 peer-focus:text-sm peer-valid:-top-2.5 peer-valid:text-sm peer-valid:backdrop-blur-2xl peer-valid:text-blue-500">Nome do Quadro:</label>
                </div>
                <div className="w-full flex flex-col justify-around items-center gap-4">
                    <label className="text-lg">Cor de Fundo:</label>
                    <div className="flex gap-3">
                        {colors.map((color:string)=>(
                            <button className={`w-10 h-10 rounded-4xl ${colorBoard==color?"border-white border-2":"border-0"}`} style={{backgroundColor:color}} key={color} type="button" onClick={()=>{setColorBoard(color)}}></button>
                        ))
                        }
                    </div>
                </div>
                <button className="absolute p-3 bg-green-800 text-white font-semibold rounded-xl bottom-30 w-3/5 right-1/5 left-1/5" type="submit">Adicionar Board</button>
            </form>
            {msg&&msg.length>0&&(
                <Card msg={msg} tipo={tipoCard} key={cardId}/>
            )}
            {isLoading&&(
                <Loading/>
            )}
        </div>
    )
}
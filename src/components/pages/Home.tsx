import Lottie from "lottie-react"
import AeroPlane from "../animations/Aero plane.json"
import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
type Board={
    id:number,
    color:string,
    name:string
}
export default function Home(){
    const [boards,setBoards]=useState<Board[]>([])
    useEffect(()=>{
        async function request(){
            const response=await fetch("http://localhost:3000/boards",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({user_id:localStorage.getItem("user_id")})
            })
            const res=await response.json()
            setBoards(res.boards)
        }
        request()
    },[])
    return(
        <div className="flex flex-col h-full w-full text-white py-5 items-center">
            <h1 className="font-semibold text-3xl text-center">Quadros</h1>
            {boards.length<=0&&(
            <div className="flex flex-col gap-3 mt-5 items-center justify-center">
                <Lottie animationData={AeroPlane} loop={true} className="w-4/5"/>
                <p className="font-semibold text-lg">Nenhum quadro criado</p>
            </div>
            )}
            {boards.length>0&&(
            <div className="h-[70%] w-full flex items-center justify-center flex-col">
            {boards.map((valor)=>(
                <div key={valor.id} style={{background:valor.color}} className="w-3/4 h-1/8 my-1 text-white flex items-center justify-around rounded-xl font-semibold text-lg">
                    <div className="w-1/2">{valor.name}</div>
                </div>
            ))}
            </div>
        )}
            <Link to="/addboard" className="w-1/2 bg-green-800 font-semibold p-3 rounded-xl text-lg flex items-center justify-center absolute right-[5%] bottom-[15%]"><span className="text-4xl mb-2">+ &nbsp;</span>Criar Quadro</Link>
        </div>
    )
}
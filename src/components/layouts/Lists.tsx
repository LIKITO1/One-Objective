import {useEffect,useState} from "react"
import {useParams} from "react-router-dom"
export default function Lists(){
    type List={
        id:number,
        title:string
    }
    const {id}=useParams()
    const [data,setData]=useState<List[]>([])
    async function requisitar(){
        const response=await fetch("https://backend-one-objective.onrender.com/lists",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify({id})
        })
        const res=await response.json()
        setData(res.lists)
    }
    useEffect(()=>{
        requisitar()
    },[id])
    return (
        <div className="w-full h-full flex gap-3 p-2">
            <div className="w-1/2 bg-gray-900 h-1/3 text-white rounded-2xl">
                {data.map((valor)=>(
                    <div key={valor.id}>
                        <h1 className="w-full text-center text-xl font-semibold mt-2">{valor.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}
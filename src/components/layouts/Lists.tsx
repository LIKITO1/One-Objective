import {useEffect,useState} from "react"
import {useParams,useNavigate} from "react-router-dom"
export default function Lists(){
    type List={
        id:number,
        title:string
    }
    const {id}=useParams()
    const [data,setData]=useState<List[]>([])
    const navigate=useNavigate()
    function viewList(idList:number){
        navigate(`/list/${idList}`)
    }
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
        <div className="w-full h-full flex flex-col items-center gap-3 p-2">
                {data.map((valor)=>(
                <div className="w-4/5 bg-gray-900 h-1/10 text-white rounded-2xl flex items-center justify-center" key={valor.id} onClick={()=>{viewList(valor.id)}}>
                    <h1 className="w-full text-center text-xl font-semibold">{valor.title}</h1>
                </div>
                ))}
        </div>
    )
}
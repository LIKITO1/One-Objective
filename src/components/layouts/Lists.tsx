import {useNavigate} from "react-router-dom"
type List={
    id:number,
    title:string
}
export default function Lists({lists}:{lists:List[]}){
    const navigate=useNavigate()
    function viewList(idList:number){
        navigate(`/list/${idList}`)
    }
    return (
        <div className="w-full h-full flex flex-col items-center gap-3 p-2">
                {lists.map((valor)=>(
                <div className="w-4/5 bg-gray-900 h-1/10 text-white rounded-2xl flex items-center justify-center" key={valor.id} onClick={()=>{viewList(valor.id)}}>
                    <h1 className="w-full text-center text-xl font-semibold">{valor.title}</h1>
                </div>
                ))}
        </div>
    )
}
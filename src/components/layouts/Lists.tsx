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
        <div className="w-4/5 h-7/10 flex flex-col items-center gap-3 p-2 overflow-y-scroll mx-auto">
                {lists.map((valor)=>(
                <div className="w-4/5 bg-gray-900 gap-2 text-white rounded-2xl flex-col flex items-center justify-center px-2 pb-3" key={valor.id}>
                    <h1 className="w-full text-center text-xl font-semibold">{valor.title}</h1>
                    <div className="bg-gray-800 w-full">a</div>
                    <button className="bg-gray-700 w-full font-bold text-xl" onClick={()=>viewList(valor.id)}>+</button>
                </div>
                ))}
        </div>
    )
}
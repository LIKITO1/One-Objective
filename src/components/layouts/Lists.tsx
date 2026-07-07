import { useNavigate } from "react-router-dom"
type List={
    id:number,
    title:string
}
export default function Lists({lists}:{lists:List[]}){
    const navigate=useNavigate()
    function viewList(id:number,title:string){
        console.log(id)
        navigate(`/list/${id}`,{state:{nameList:title}})
    }
    return (
        <div className="w-full h-7/10 flex flex-col items-center gap-3 mt-5 overflow-y-scroll mx-auto">
                {lists.map((list)=>(
                <div className="w-4/5 bg-gray-900 gap-2 text-white rounded-2xl flex-col flex items-center justify-center px-4 pt-2 pb-4" key={list.id}>
                    <h1 className="w-full text-center text-2xl font-semibold">{list.title}</h1>
                        <button className="bg-gray-700 w-full text-lg p-2 rounded-xl font-medium" onClick={()=>viewList(list.id,list.title)}>Ver itens</button>
                </div>
                ))}
        </div>
    )
}
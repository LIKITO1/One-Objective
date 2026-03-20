import { FaTrash } from "react-icons/fa";
export default function TrashIcon({onClick}:{onClick:()=>void}){
    return(
        <button onClick={(e)=>{
            e.stopPropagation()
            onClick()
        }}>
            <FaTrash/>
        </button>
    )
}
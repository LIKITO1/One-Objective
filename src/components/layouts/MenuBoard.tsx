import HomeIcon from "../icons/HomeIcon"
import AddIcon from "../icons/AddIcon"
import {useNavigate,useParams} from "react-router-dom"
type Props={
    hiddenAdd?:boolean,
    onClick?:()=>void
}
export default function MenuBoard({hiddenAdd}:Props){
    const navigate=useNavigate()
    const idBoard=useParams().id
    function openAddList(){
        navigate(`/addList/${idBoard}`)
    }
    return(
        <div className="fixed w-full h-1/7 bottom-0 bg-black flex items-center justify-around">
            <HomeIcon onClick={()=>navigate("/home")} className="size-13 text-white"/>
            {!hiddenAdd&&(
                <AddIcon className="size-15 text-white" onClick={openAddList}/>
            )}
        </div>
    )
}
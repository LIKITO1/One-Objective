import HomeIcon from "../icons/HomeIcon"
import AddIcon from "../icons/AddIcon"
import {useNavigate} from "react-router-dom"
type Props={
    openAddList:()=>void
}
export default function MenuBoard({openAddList}:Props){
    const navigate=useNavigate()
    return(
        <div className="fixed w-full h-1/7 bottom-0 bg-black flex items-center justify-around">
            <HomeIcon onClick={()=>navigate("/home")} className="size-13 text-white"/>
            <AddIcon className="size-15 text-white" onClick={()=>openAddList}/>
        </div>
    )
}
import { MdOutlineFilterFrames } from "react-icons/md";
import {NavLink} from "react-router-dom"
export default function QuadroIcon(){
    return(
        <NavLink to="/home" className={({isActive})=>`flex flex-col items-center justify-center ${isActive?"text-white":"text-gray-400"}`}>
            <MdOutlineFilterFrames size="40"/>
            <small className="font-bold text-md">Quadro</small>
        </NavLink>
    )
}
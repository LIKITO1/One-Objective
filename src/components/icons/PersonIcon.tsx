import { IoPersonCircleOutline } from "react-icons/io5";
import {NavLink} from "react-router-dom"
export default function PersonIcon(){
    return(
        <NavLink to="/perfil" className={({isActive})=>`flex flex-col items-center justify-center ${isActive?"text-white":"text-gray-400"}`}>
            <IoPersonCircleOutline size="40"/>
            <small className="text-md font-bold">Conta</small>
        </NavLink>
    )
}
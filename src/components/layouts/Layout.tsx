import {Outlet} from "react-router-dom"
import Menu from "./Menu"
export default function Layout(){
    return(
        <div className="bg-gray-700 w-full h-full absolute">
            <Menu/>
            <Outlet/>
        </div>
    )
}
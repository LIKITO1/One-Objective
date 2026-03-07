import QuadroIcon from "../icons/QuadroIcon"
import PersonIcon from "../icons/PersonIcon"
export default function Menu(){
    return(
        <>
            <nav className="absolute bottom-0 w-full h-1/8 bg-black p-2 box-border flex items-center justify-around">
                <QuadroIcon/>
                <PersonIcon/>
            </nav>
        </>
    )
}
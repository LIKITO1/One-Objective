import { MdHome } from "react-icons/md";
type Props={
    className:string,
    onClick:()=>void
}
export default function HomeIcon({className,onClick}:Props){
    return(
        <div>
            <button onClick={onClick}><MdHome className={className}/></button>
        </div>
    )
}
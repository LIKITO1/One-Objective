import { MdHome } from "react-icons/md";
type Props={
    className:string
}
export default function HomeIcon({className}:Props){
    return(
        <div>
            <MdHome className={className}/>
        </div>
    )
}
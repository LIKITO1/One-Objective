import { IoIosAdd } from "react-icons/io";
type Props={
    className:string,
    onClick?:()=>void
}
export default function AddIcon({className,onClick}:Props){
    return(
        <div>
            <IoIosAdd className={className} onClick={onClick}/>
        </div>
    )
}
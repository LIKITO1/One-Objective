import {AiOutlineLoading3Quarters} from "react-icons/ai"
import styles from "./Loading.module.css"
function Loading(){
    return(
        <div className="absolute h-full w-full backdrop-blur-xs flex items-center justify-center top-0 left-0">
            <AiOutlineLoading3Quarters size="70" className={styles.animado}/>
        </div>
    )
}
export default Loading
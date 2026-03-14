import {useState} from "react"
import styles from "./Card.module.css"
import type { tipos } from "../types/CardType"
type CardProps={
    msg:string,
    tipo:tipos
}
const colors={
    success:"text-green-600",
    error:"text-red-500",
    warning:"text-yellow-400"
}
export default function Card({msg,tipo}:CardProps){
    const [display,setDisplay]=useState("flex")
    setTimeout(()=>{
        setDisplay("hidden")
    },2000)
    return(
        <div className={`${colors[tipo]} ${styles.animacao} ${display} bg-gray-800 absolute top-10 w-4/5 left-1/10 right-1/10 h-20 items-center justify-center font-semibold text-lg rounded-2xl`}>
            <p>{msg}</p>
        </div>
    )
}
import {useState} from "react"
export default function CardDelete({onClick}:{onClick:()=>void}){
    const [display,setDisplay]=useState(true)
    function cancelar(){
        setDisplay(false)
    }
    return(
        <div className={`absolute w-full h-full ${display?"flex":"hidden"} items-center justify-center backdrop-blur-xl top-0`}>
            <div className="w-9/10 bg-gray-800 h-3/5 flex items-center justify-center flex-col gap-10 rounded-xl">
                <h3 className="font-semibold text-center text-lg">Tem certeza que deseja exluir o quadro?</h3>
                <div className="w-full flex justify-around">
                    <button className="px-5 py-4 bg-green-700 rounded-xl font-semibold text-lg" onClick={onClick}>Excluir</button>
                    <button className="px-5 py-4 bg-red-700 rounded-xl font-semibold text-lg" onClick={cancelar}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
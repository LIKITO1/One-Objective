import Lottie from "lottie-react"
import AeroPlane from "../animations/Aero plane.json"
import {Link} from "react-router-dom"
export default function Home(){
    return(
        <div className="flex flex-col h-full w-full text-white py-5 items-center">
            <h1 className="font-semibold text-2xl text-center">Quadros</h1>
            <div className="flex flex-col gap-3 mt-5 items-center justify-center">
                <Lottie animationData={AeroPlane} loop={true} className="w-4/5"/>
                <p className="font-semibold text-lg">Nenhum quadro criado</p>
            </div>
            <Link to="/addboard" className="w-1/2 bg-green-800 font-semibold p-3 rounded-xl text-lg flex items-center justify-center absolute right-[5%] bottom-[15%]"><span className="text-4xl mb-2">+ &nbsp;</span>Criar Quadro</Link>
        </div>
    )
}
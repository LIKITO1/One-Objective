import { useNavigate } from "react-router-dom"
export default function ReturnButton(){
    const navigate=useNavigate()
    function back(){
        navigate(-1)
    }
    return(
        <button className="p-4 font-semibold text-lg bg-gray-900 text-white w-4/5 rounded-2xl mt-4" onClick={back}>Voltar</button>
    )
}
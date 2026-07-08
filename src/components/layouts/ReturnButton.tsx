import { useNavigate } from "react-router-dom"
type Props={
    tamanho:string
}
export default function ReturnButton({tamanho}:Props){
    const navigate=useNavigate()
    function back(){
        navigate(-1)
    }
    return(
        <button className={`p-4 font-semibold text-lg bg-gray-900 text-white ${tamanho=="small"?"w-4/5 rounded-2xl":"w-full absolute bottom-0"} mt-4`} onClick={back}>Voltar</button>
    )
}
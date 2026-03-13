type tipos="success" | "error" | "warning"
type CardProps={
    msg:string,
    tipo:tipos
}
const colors={
    success:"bg-green-600",
    error:"bg-red-500",
    warning:"bg-yellow-600"
}
export default function Card({msg,tipo}:CardProps){
    return(
        <div className={`${colors[tipo]} absolute top-10 w-4/5 left-1/10 right-1/10 h-20 flex items-center justify-center font-semibold text-lg rounded-2xl`}>
            <p>{msg}</p>
        </div>
    )
}
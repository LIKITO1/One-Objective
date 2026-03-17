import {Link} from "react-router-dom"
import ParticlesBackground from "./components/layouts/ParticlesBackground"
import {useState} from "react"
import Card from "./components/layouts/Card"
import type {tipos} from "./components/types/CardType"
import {useNavigate} from "react-router-dom"
function App() {
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  const [msg,setMsg]=useState("")
  const [tipo,setTipo]=useState<tipos>("success")
  const [cardId,setCardId]=useState(0)
  const navigate=useNavigate()
  async function logar(e:{preventDefault:()=>void}){
    e.preventDefault()
    const response=await fetch("http://localhost:3000/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },body:JSON.stringify({email,pass})
    })
    const res=await response.json()
    setCardId((e)=>e+1)
    setMsg(res.msg)
    setTipo(res.tipo)
    if(res.tipo=="success"){
      setTimeout(()=>{
        navigate("/home")
        localStorage.setItem("logado","true")
        localStorage.setItem("user_id",res.user_id)
      },1500)
    }
  }
  return (
    <>
    <ParticlesBackground back="#111" color="#ffffff"/>
    <div className="flex text-white items-center justify-center h-screen w-full absolute">
      <form className="w-7/8 h-1/2 flex flex-col justify-around items-center bg-gray-800 rounded-2xl py-5" onSubmit={logar}>
        <h1 className="text-center text-3xl font-bold">Login</h1>
        <div className="flex flex-col w-4/5 gap-2">
          <label className="font-bold">Email:</label>
          <input type="email" className="border h-10 focus:border-2 outline-0 rounded-xl p-2" onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div className="flex flex-col w-4/5 gap-2">
          <label className="font-semibold">Senha:</label>
          <input type="password" className="border h-10 focus:border-2 outline-0 rounded-xl p-2" onChange={(e)=>setPass(e.target.value)} required/>
          </div>
        <button type="submit" className="w-3/5 p-3 rounded-2xl bg-blue-600 font-semibold self-center">Logar</button>
        <Link to="/register" className="underline text-blue-500">Cadastrar</Link>
      </form>
    </div>
    {msg&&msg.length>0&&(
      <Card msg={msg} tipo={tipo} key={cardId}/>
    )}
    </>
  )
}
export default App
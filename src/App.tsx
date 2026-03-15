import {Link} from "react-router-dom"
import ParticlesBackground from "./components/layouts/ParticlesBackground"
function App() {
  function logar(e:{preventDefault:()=>void}){
    e.preventDefault()
  }
  return (
    <>
    <ParticlesBackground back="#111" color="#ffffff"/>
    <div className="flex text-white items-center justify-center h-screen w-full absolute">
      <form className="w-7/8 h-1/2 flex flex-col justify-around items-center bg-gray-800 rounded-2xl py-5" onSubmit={logar}>
        <h1 className="text-center text-3xl font-bold">Login</h1>
        <div className="flex flex-col w-4/5 gap-2">
          <label className="font-bold">Email:</label>
          <input type="email" className="border h-10 focus:border-2 outline-0 rounded-xl p-2" required/>
        </div>
        <div className="flex flex-col w-4/5 gap-2">
          <label className="font-semibold">Senha:</label>
          <input type="password" className="border h-10 focus:border-2 outline-0 rounded-xl p-2" required/>
          </div>
        <button type="submit" className="w-3/5 p-3 rounded-2xl bg-blue-600 font-semibold self-center">Logar</button>
        <Link to="/register" className="underline text-blue-500">Cadastrar</Link>
      </form>
    </div>
    </>
  )
}
export default App
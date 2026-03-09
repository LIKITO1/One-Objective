export default function AddBoard(){
    return(
        <div className="w-full h-full flex justify-center text-white">
            <form className="w-4/5 h-4/5 flex flex-col mt-[5%] gap-5">
                <h1 className="font-bold text-2xl text-center">Adicionar Quadro</h1>
                <div className="relative w-full my-5">
                    <input placeholder=" " className="w-full border outline-none peer h-12 px-2 text-lg" required/>
                    <label className="pointer-events-none text-lg absolute top-2 left-2 transition-all duration-200 peer-focus:text-blue-500 peer-focus:backdrop-blur-2xl peer-focus:-top-2.5 peer-focus:text-sm peer-valid:-top-2.5 peer-valid:text-sm peer-valid:text-blue-500 peer-valid:backdrop-blur-2xl">Nome do Quadro:</label>
                </div>
                <div className="w-full flex justify-around items-center">
                    <label className="text-lg">Cor de Fundo:</label>
                    <input type="color" className="w-20 h-10"/>
                </div>
                <button className="mt-75 p-3 bg-green-800 text-white font-semibold rounded-xl">Adicionar Quadro</button>
            </form>
        </div>
    )
}
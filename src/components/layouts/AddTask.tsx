import TextareaAutoSize from "react-textarea-autosize"
export default function AddTask(){
    return(
        <div className="w-4/5 bg-gray-900 flex flex-col items-center justify-center pt-3 pb-6 gap-2 rounded-2xl mb-5">
            <label className="font-bold text-lg">Título:</label>
            <input type="text" className="outline-0 border border-white rounded-xl h-10 p-2 w-4/5"/>
            <label className="font-bold text-lg">Descrição:</label>
            <TextareaAutoSize minRows={3} className="w-4/5 overflow-hidden resize-none border border-white rounded-xl p-2"/>
        </div>
    )
}
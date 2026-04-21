import AddTask from "../layouts/AddTask"
export default function List(){
    return(
        <div className="bg-gray-700 h-full w-full text-white absolute flex items-center py-5 flex-col">
            <AddTask/>
        </div>
    )
}
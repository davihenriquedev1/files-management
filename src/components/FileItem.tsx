import { useState } from "react"
import { File } from "../types/File"

type Props = {
    item: File
}

export const FileItem = ({item}:Props) => {
    const [openFile, setOpenFile] = useState(false);

    return (
        <>
            <li key={item.id} className="flex flex-col cursor-pointer mb-2 w-28 ">
                
                <div className=" w-full group relative hover:rounded-md">
                    <img
                        src={item.url}
                        alt={`${item.type}-${item.name}`}
                        className="w-full h-auto object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
                    />  
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 rounded-lg group-hover:scale-105 flex items-center justify-center transition-transform" onClick={()=> setOpenFile(true)}>
                        <span className="text-white text-sm font-semibold">Open {item.type}</span>
                    </div>
                </div>
                
                <div className="text-sm text-wrap">{item.name}</div>
            </li>
            {openFile &&
                <div className="flex justify-center fixed bg-black/50 w-full h-full top-0 left-0 p-4 z-10">
                <img
                    src={item.url}
                    alt={`${item.type}-${item.name}`}
                    className="w-full lg:w-[70%] object-contain"
                />
                <button type="button" className="absolute right-2 rounded-full bg-white/50 px-2 flex justify-center items-center font-bold" onClick={()=> setOpenFile(false)}>x</button>
                </div>
            }
        </>
    )
}

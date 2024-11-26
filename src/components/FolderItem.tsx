import { Link } from "react-router-dom"
import { Folder } from "../types/File"

type Props = {
    item:Folder;
}

export const FolderItem = ({item}:Props) => {

    return (
        <li className="flex flex-col transition-all mb-4 w-20">
            <Link 
                key={item.id} 
                to={`/${item.title.replace(/\s/g, '').toLowerCase()}`} 
                className="w-fit"
            >
                <img src="/assets/images/folder.png" alt="" className="w-full"/>
            </Link>
            <span className="text-xs font-medium">{item.title}</span>
        </li>
    )
}
import { Link, useLocation } from "react-router-dom"
import { Folder } from "../types/File"

type Props = {
    item:Folder;
}

export const FolderItem = ({item}:Props) => {
    const location = useLocation();
    const currentPath = location.pathname;
    
    // Remover qualquer barra final no currentPath
    const sanitizedCurrentPath = currentPath.replace(/\/$/, '');
    const nextPath = `${sanitizedCurrentPath}/${item.title.replace(/\s/g, '').toLowerCase()}`;

    return (
        <li className="flex flex-col transition-all mb-4 w-24" key={item.id} >
            <Link 
                to={nextPath} 
                className="w-fit mb-1"
            >
                <img src="/assets/images/folder.png" alt="" className="w-full"/>
            </Link>
            <span className="text-xs font-medium">{item.title}</span>
        </li>
    )
}
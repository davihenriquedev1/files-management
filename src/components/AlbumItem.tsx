import { Link } from "react-router-dom"
import { Album } from "../types/Images"

type Props = {
    item:Album
}

export const AlbumItem = ({item}:Props) => {
    return (
        <li className="flex flex-col transition-all mb-4 w-20">
            <Link key={item.id} to={`${item.title.replace(/\s/g, '').toLowerCase()}`} className="w-fit">
                <img src="/images/folder.png" alt="" className="w-full"/>
            </Link>
            <span className="text-xs font-medium">{item.title}</span>
        </li>
    )
}
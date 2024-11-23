import { FileItem } from "../components/FileItem"
import { FolderItem } from "../components/FolderItem"
import { DynamicStructure } from "../types/File"

export const renderContent = (data: DynamicStructure) => {
    return data.map((item:any)=> {
        if(item.type === 'folder') {
            return (
                <FolderItem item={item}/>
            )
        } else {
            return (
                <FileItem item={item}/>
            )
        }
     })
}
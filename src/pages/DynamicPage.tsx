import { useParams } from "react-router-dom";
import { useFiles } from "../hooks/useFiles";
import { FolderItem } from "../components/FolderItem";
import { DynamicStructure } from "../types/File";
import { FileItem } from "../components/FileItem";
//import { FolderItem } from "../components/FolderItem";
//import { FileItem } from "../components/FileItem";

export const DynamicPage = () => {
    const { data, loading } = useFiles();
    const params = useParams();
    const slug = params.slug;

    if(loading) {
        return <div className="animate-spin rounded-full w-5 h-5 border border-x-slate-800 border-t-slate-800"></div>
    }

    if(!data) {
        return <div className="flex justify-center items-center text-3xl text-slate-500">No files here.</div>
    }

    const renderContent = (data: DynamicStructure) => {
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

    return (
        <div className="w-full">
            <ul className="flex gap-4">
                {!slug &&
                    renderContent(data)
                }
            </ul>
        </div>
    );
};
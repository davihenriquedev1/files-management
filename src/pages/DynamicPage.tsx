import { useParams } from "react-router-dom";
import { useFiles } from "../hooks/useFiles";
import { FolderItem } from "../components/FolderItem";

export const DynamicPage = () => {
    const { data, loading } = useFiles();
    const params = useParams();
    const slug = params.slug

    if(loading) {
        return <div className="animate-spin rounded-full w-5 h-5 border border-x-slate-800 border-t-slate-800"></div>
    }

    if(!data) {
        return <div className="flex justify-center items-center text-3xl text-slate-500">No files here.</div>
    }

    return (
        <div className="w-full">
            {!slug && data &&
                <ul>
                    {data.map((item) => ( <FolderItem item={item}/>))}
                </ul>
            }
        </div>
    );
};
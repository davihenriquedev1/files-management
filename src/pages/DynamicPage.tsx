import { useParams } from "react-router-dom";
import { useFiles } from "../hooks/useFiles";
import { findFolder } from "../utils/findFolder";
import { renderContent } from "../utils/renderContent";
import { NotFound } from "./NotFound";

export const DynamicPage = () => {
    const { data, loading } = useFiles();
    const {"*": slug} = useParams(); // Captura múltiplos segmentos com uma string
    const splitSlug = slug?.split('/').filter(segment=> segment !== "");

    const folder = splitSlug && data ? findFolder(splitSlug, data) : null;

    return (
        <div className="w-full">
            <ul className="flex gap-4">
                { loading &&
                    <li className="animate-spin rounded-full w-5 h-5 border-2 border-slate-400 border-b-black/5"></li>
                }
                { !loading && !data &&
                    <li className="flex w-full justify-center items-center text-3xl text-slate-500">No files here.</li>
                }
                { !loading && data && !slug && renderContent(data) }
                { !loading && data && slug && !folder && <NotFound/> }
                { !loading && data && slug && folder && renderContent(folder?.content ?? []) }
                
            </ul>
        </div>
    );
};
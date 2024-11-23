import { useParams } from "react-router-dom";
import { useFiles } from "../hooks/useFiles";
import { findFolder } from "../utils/findFolder";
import { renderContent } from "../utils/renderContent";
import { NotFound } from "./NotFound";

export const DynamicPage = () => {
    const { data, loading } = useFiles();
    const params = useParams();
    const slug = params.slug; // Captura múltiplos segmentos
    const splitSlug = slug?.split('/').filter(segment=> segment !== "");

    if(loading) {
        return <div className="animate-spin rounded-full w-5 h-5 border border-x-slate-800 border-t-slate-800"></div>
    }

    if(!data) {
        return <div className="flex justify-center items-center text-3xl text-slate-500">No files here.</div>
    }

    const folder = splitSlug ? findFolder(splitSlug, data) : null;

    return (
        <div className="w-full">
            <ul className="flex gap-4">
                { !slug && renderContent(data) }
                { slug && folder && renderContent(folder?.content ?? []) }
                { slug && !folder && <NotFound/> }
            </ul>
        </div>
    );
};
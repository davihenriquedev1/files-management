import { useParams } from "react-router-dom";
import { useFiles } from "../hooks/useFiles";
import { findFolder } from "../utils/findFolder";
import { renderContent } from "../utils/renderContent";
import { NotFound } from "./NotFound";
import { useEffect, useState } from "react";
import { Folder } from "../types/File";

export const DynamicPage = () => {
    const { data, loading } = useFiles();
    const params = useParams();
    const slug = params['*'] || ''; // Captura todos os segmentos após a barra
    const [folder, setFolder] = useState<Folder | null>(null);

    // Divide o slug para obter os segmentos após a barra (/)
    const splitSlug = slug?.split('/').filter(segment=> segment !== "");

    useEffect(()=> {
        // Se houver segmentos e data busca a pasta correspondente a esse caminho
        setFolder(splitSlug && data ? findFolder(splitSlug, data) : null);
    },[slug, data])

    return (
        <div className="w-full">
            <ul className="flex gap-4">
                {loading && (
                    <li className="animate-spin rounded-full w-5 h-5 border-2 border-slate-400 border-b-black/5"></li>
                )}
                {!loading && !data && (
                    <li className="flex w-full justify-center items-center text-3xl text-slate-500">No files here.</li>
                )}
                {!loading && data && splitSlug.length === 0 && renderContent(data)} 
                {!loading && data && splitSlug.length > 0 && !folder && <NotFound />} 
                {!loading && data && splitSlug.length > 0 && folder && renderContent(folder?.content ?? [])}
            </ul>
        </div>

    );
};
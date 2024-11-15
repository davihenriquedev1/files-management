"use client";

import { Link } from "react-router-dom";
import useAlbums from "../hooks/useAlbums";

export const Images = () => {

    const { error, albums } = useAlbums();

    if (error) return <p>Error loading albums: {error}</p>;

    return (
        <div className="w-full">
        {albums && (
            <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                {albums.map((item) => (
                    <li className="flex flex-col transition-all">
                        <Link key={item.id} to={`/images/${item.id}`} className="w-fit p-2 hover:shadow-lg hover:rounded-md">
                            <img src="/images/folder.png" alt="" className="w-20"/>
                        </Link>
                        <span className="px-2 text-sm font-medium">{item.title}</span>
                    </li>
                ))}
            </ul>
        )}
        </div>
    );
};
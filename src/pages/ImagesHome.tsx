"use client";

import { Link } from "react-router-dom";
import { useImages } from "../hooks/useImages";

export const ImagesHome = () => {

    const { error, albums, imagesNoFolder, loading } = useImages();

    if (error) return <p>Loading error: {error}</p>;
    if(loading) return <div>loading...</div>

    return (
        <div className="w-full">
        {albums && (
            <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                {albums.map((item) => (
                    <li className="flex flex-col transition-all">
                        <Link key={item.id} to={`/images/${item.title.toLowerCase()}`} className="w-fit p-2 hover:shadow-lg hover:rounded-md">
                            <img src="/images/folder.png" alt="" className="w-20"/>
                        </Link>
                        <span className="px-2 text-sm font-medium">{item.title}</span>
                    </li>
                ))}
            </ul>
        )}
        {imagesNoFolder &&
            <ul>
                {imagesNoFolder.map((item) => (
                    <li className="flex flex-col transition-all">
                        <Link key={item.id} to={`/images/${item.url}`} className="w-fit p-2 hover:shadow-lg hover:rounded-md">
                            <img src={item.url} alt="" className="w-20"/>
                        </Link>
                    </li>
                ))}
            </ul>
        }
        </div>
    );
};
"use client";

import { useImages } from "../hooks/useImages";
import { ImageItem } from "../components/ImageItem";
import { AlbumItem } from "../components/AlbumItem";

export const ImagesFolder = () => {
    const { error, albums, imagesNoFolder, loading } = useImages();

    if (error) return <p>Loading error: {error}</p>;
    if(loading) return <div>loading...</div>

    return (
        <div className="w-full">
            <ul className="flex w-full flex-wrap gap-5 items-start">
                {albums?.map((item) => (
                    <AlbumItem item={item}/>
                ))}
                {imagesNoFolder?.map((item) => (
                    <ImageItem item={item}/>
                ))}
            </ul> 
        </div>
    );
};
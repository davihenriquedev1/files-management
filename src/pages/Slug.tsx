{/*

import { useParams } from "react-router-dom";
import { useImages } from "../hooks/useImages";
import { ImageItem } from "../components/ImageItem";
import { FolderItem } from "../components/FolderItem";
import { useState } from "react";

export const Slug = () => {
    const { albums, standalonePhotos } = useImages();
    const params = useParams();
    const [activeImage, setActiveImage] = useState(null); // Gerencia a imagem ativa no diálogo

    if (!params.slug) return;

    // Encontrar álbum correspondente pelo slug
    const album = albums?.find(album => 
        album.title.toLowerCase() === params.slug
    );

    // Encontrar imagem avulsa (caso slug corresponda a uma imagem avulsa)
    const image = standalonePhotos?.find(image => 
        image.name.toLowerCase() === params.slug
    );

    // Se não houver correspondência para álbum ou imagem
    if (!album && !image) {
        return <p className="text-center text-lg">No files to show.</p>;
    }

    // Função para abrir o diálogo
    const handleImageClick = (image:Image) => {
        setActiveImage(image);
    };

    // Função para fechar o diálogo
    const handleCloseDialog = () => {
        setActiveImage(null);
    };

    return (
        <div className="w-full">
            // Renderiza fotos do álbum 
            {album && (
                <ul className="flex flex-wrap gap-6">
                    {album.photos.map((item) => (
                        <ImageItem 
                            key={item.id} 
                            item={item} 
                            onClick={() => handleImageClick(item)} 
                        />
                    ))}
                </ul>
            )}

            // Renderiza imagem avulsa
            {image && (
                <div className="flex justify-center">
                    <img 
                        src={image.url} 
                        alt={image.name} 
                        className="cursor-pointer" 
                        onClick={() => handleImageClick(image)} 
                    />
                </div>  
            )}

             // Diálogo para exibir imagem ativa
            {activeImage && (
                <dialog 
                    className="fixed left-0 top-0 bg-black/80 w-full h-full flex justify-center items-center" 
                    open
                >
                    <img 
                        src={activeImage.url} 
                        alt={activeImage.name} 
                        className="w-full md:w-[65%]" 
                    />
                    <button 
                        type="button" 
                        onClick={handleCloseDialog} 
                        className="absolute top-0 right-0 text-white mr-4 text-6xl"
                    >
                        x
                    </button>
                </dialog>
            )}
        </div>
    );
};


const { error, albums, standalonePhotos, loading } = useImages();

    if (error) return <p>Loading error: {error}</p>;
    if(loading) return <div>loading...</div>

    return (
        <div className="w-full">
            <ul className="flex w-full flex-wrap gap-5 items-start">
                {albums?.map((item) => (
                    <FolderItem item={item}/>
                ))}
                {standalonePhotos?.map((item) => (
                    <ImageItem item={item}/>
                ))}
            </ul> 
        </div>
    );

*/}
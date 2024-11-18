import { useState, useEffect } from 'react';
import {getAlbums, getImages} from '../api/images-api';
import { Album, Image } from '../types/Images';

export const useImages = () => {
    const [albums, setAlbums] = useState<Album[] | null>([]);
    const [imagesNoFolder, setImagesNoFolder] = useState<Image[] | null>([]);
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null); // Especificando que o erro pode ser uma string ou null

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true)
            try {
                const dataAlbums = await getAlbums();
                const dataImagesNoFolder = await getImages() ;
                setAlbums(dataAlbums);
                setImagesNoFolder(dataImagesNoFolder)
            } catch (err: unknown) {
                if (err instanceof Error) { // verificando tipo do erro
                    setError(err.message); // Aqui, 'err' é do tipo 'Error' e podemos acessar 'message'
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    console.log(albums)
    console.log(imagesNoFolder)
    return { albums, imagesNoFolder, loading, error };
};

import { useState, useEffect } from 'react';
import {getImages} from '../api/api';
import { Album, Image } from '../types/Images';

export const useImages = () => {
    const [folders, setFolders] = useState<Album[] | null>([]);
    const [imagesNoFolder, setImagesNoFolder] = useState<Image[] | null>([]);
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null); // Especificando que o erro pode ser uma string ou null

    useEffect(() => {   
        const fetchImages = async () => {
            setLoading(true)
            try {
                const data = await getImages();
                setFolders(data.folders);
                setImagesNoFolder(data.imagesNoFolder)
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
    return { folders, imagesNoFolder, loading, error };
};

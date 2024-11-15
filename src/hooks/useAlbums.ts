import { useState, useEffect } from 'react';
import {getAlbums} from '../api/albums-api';
import { Album } from '../types/Album';

const useAlbums = () => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null); // Especificando que o erro pode ser uma string ou null

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const data = await getAlbums();
                setAlbums(data);
            } catch (err: unknown) {
                // Verificação de tipo de erro
                if (err instanceof Error) {
                    setError(err.message); // Aqui, 'err' é do tipo 'Error' e podemos acessar 'message'
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchAlbums();
    }, []);

    return { albums, loading, error };
};

export default useAlbums;

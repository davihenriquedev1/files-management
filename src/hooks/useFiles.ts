import { useState, useEffect } from 'react';
import { getFiles } from '../api/api';
import { DynamicStructure} from '../types/File';

export const useFiles = () => {
    const [data, setData] = useState<DynamicStructure | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {   
        const fetchImages = async () => {
            setLoading(true)
            try {
                const response = await getFiles();
                setData(response);
            } catch (error: unknown) {
                if (error instanceof Error) { // verificando tipo do erro
                    setError(error.message); // Aqui, 'err' é do tipo 'Error' e podemos acessar 'message'
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchImages();

    }, []);

    return { data, loading, error };
};

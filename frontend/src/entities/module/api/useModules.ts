import { useEffect, useState } from 'react';
import { API_URL, getToken } from '../../../shared/api/base';
import type { Module } from '../model/mockData';

export const useModules = () => {
    const [data, setData] = useState<Module[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchModules = async () => {
            try {
                const token = getToken();
                const response = await fetch(`${API_URL}/modules`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch modules');
                }

                const json = await response.json();
                setData(json);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchModules();
    }, []);

    return { data, isLoading, error };
};

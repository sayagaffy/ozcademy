import { useEffect, useState } from 'react';
import { API_URL, getToken } from '../../../shared/api/base';
import type { Mentor } from '../model/mockData';

export const useMentors = () => {
    const [data, setData] = useState<Mentor[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const token = getToken();
                const response = await fetch(`${API_URL}/mentors`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch mentors');
                }

                const json = await response.json();
                setData(json);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMentors();
    }, []);

    return { data, isLoading, error };
};

import { useEffect, useState } from 'react';
import { API_URL } from '../../../shared/api/base';

export const useLiveToken = (bookingId: string) => {
    const [token, setToken] = useState<string>('');
    const [serverUrl, setServerUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchToken = async () => {
            if (!bookingId) {
                setIsLoading(false);
                return;
            }

            try {
                // Fetch direct from local storage since the mock auth library was removed
                const sessionToken = localStorage.getItem('jwt_token') || '';
                const response = await fetch(`${API_URL}/api/liveclass/token?booking_id=${bookingId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${sessionToken}`
                    }
                });

                if (!response.ok) {
                    const errorData = await response.text();
                    throw new Error(errorData || 'Failed to fetch LiveKit token');
                }

                const data = await response.json();
                setToken(data.token);
                setServerUrl(data.serverUrl);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchToken();
    }, [bookingId]);

    return { token, serverUrl, isLoading, error };
};

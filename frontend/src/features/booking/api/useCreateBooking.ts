import { useState } from 'react';
import { getToken } from '../../../shared/api/base';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

interface CreateBookingPayload {
    mentorId: string;
    sessionType: string;
    scheduleDate: string;
    scheduleTime: string;
    goalsDescription: string;
    portfolioLink?: string;
    price: number;
}

export const useCreateBooking = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const createBooking = async (payload: CreateBookingPayload) => {
        setIsLoading(true);
        setError(null);
        setIsSuccess(false);

        try {
            const token = getToken();
            const response = await fetch(`${API_URL}/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(errorData || 'Failed to create booking');
            }

            setIsSuccess(true);
            return true;
        } catch (err: any) {
            setError(err.message);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return { createBooking, isLoading, error, isSuccess };
};

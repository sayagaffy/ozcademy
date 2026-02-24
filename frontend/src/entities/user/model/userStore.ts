import { create } from 'zustand';
import { getToken, removeToken } from '../../../shared/api/base';
import type { User } from './types';

interface UserState {
    user: User | null;
    isAuthenticated: boolean;
    setAuth: (user: User | null, isAuthenticated: boolean) => void;
    logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    isAuthenticated: !!getToken(), // Initialize based on token existence
    setAuth: (user, isAuthenticated) => set({ user, isAuthenticated }),
    logout: () => {
        removeToken();
        set({ user: null, isAuthenticated: false });
    },
}));

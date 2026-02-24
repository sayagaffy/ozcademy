export interface User {
    id: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface RegisterCredentials {
    email: string;
    password: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
}

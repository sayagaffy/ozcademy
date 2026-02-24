export const API_URL = "http://localhost:8080";

export const setToken = (token: string) => {
    localStorage.setItem('jwt_token', token);
};

export const getToken = (): string | null => {
    return localStorage.getItem('jwt_token');
};

export const removeToken = () => {
    localStorage.removeItem('jwt_token');
};

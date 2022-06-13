import axios from 'axios';

export const BASE_URL = 'http://localhost:5000/api';

export const post = async (url: string, data?: any) => {
    const token = getToken();
    return axios.post(BASE_URL + url, data ?? {}, getConfig(token));
};

const getConfig = (token: string | null) => ({
    headers: {Authorization: `Bearer ${token}`},
});

export function getToken() {
    return localStorage.getItem('token');
}
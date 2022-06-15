import axios from 'axios';

export const BASE_URL = 'http://localhost:5000/api';

export const get = async (url: string) => {
    const token = getToken();
    return axios.get(BASE_URL + url, getConfig(token));
};

export const post = async (url: string, data?: any) => {
    const token = getToken();
    return axios.post(BASE_URL + url, data ?? {}, getConfig(token));
};

export const patch = async (url: string, data?: any) => {
    const token = getToken();
    return axios.patch(BASE_URL + url, data ?? {}, getConfig(token));
};

const getConfig = (token: string | null) => ({
    headers: {Authorization: `Bearer ${token}`},
});

export function getToken() {
    return localStorage.getItem('token');
}
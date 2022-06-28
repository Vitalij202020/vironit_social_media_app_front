import axios from 'axios';

export const BASE_URL = 'http://localhost:5000/api';

export const get = async (url: string) => {
    const token = getToken();
    return axios.get(BASE_URL + url, createHeader(token));
};

export const post = async (url: string, data?: any) => {
    const token = getToken();
    return axios.post(BASE_URL + url, data ?? {}, createHeader(token));
};

export const postFormData = async (url: string, data?: any) => {
    const token = getToken();
    return axios.post(BASE_URL + url, data ?? {}, createHeader(token));
};

export const patch = async (url: string, data?: any) => {
    const token = getToken();
    return axios.patch(BASE_URL + url, data ?? {}, createHeader(token));
};

export const deleteOne = async (url: string) => {
    const token = getToken();
    return axios.delete(BASE_URL + url, getConfig(token));
};

const getConfig = (token: string | null) => ({
    headers: {Authorization: `Bearer ${token}`},
});

const createHeader = (token: string | null) => ({
    headers: {Authorization: `Bearer ${token}`},
});

export function getToken() {
    const result = localStorage.getItem('token');
    return JSON.parse(result as string)
}
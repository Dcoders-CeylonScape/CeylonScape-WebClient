import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
});


export const interpolApi = axios.create({
    baseURL: 'https://ws-public.interpol.int/notices/v1',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
});
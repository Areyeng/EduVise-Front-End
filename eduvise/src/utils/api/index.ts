'use client'
import axios from "axios";

type apiActionType = 'post' | 'get' | 'put' | 'delete';

// const token = localStorage.getItem('token');
// const instance = getAxiosInstance(token || "");

export function getAxiosInstance (accessToken: string){
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const instance = axios.create({
        baseURL: baseUrl,
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
    });
    return instance;
}

const getData = async (path: string) => {
    return await api(path, 'get');
}

const postData = async (path: string, data: any) => {
    return await api(path, 'post', data);
}

const deleteData = async (path: string) => {
    return await api(path, 'delete');
}

const updateData = async (path: string, data: any) => {
    return await api(path, 'put', data);
}

const api = async (path: string, action: apiActionType, data = {}, instance: any) => {
    return await instance[action](`${path}`, data).then((res) => {
        return res?.data;
    });
}

export { api, deleteData, getData, postData, updateData };
export type { apiActionType };

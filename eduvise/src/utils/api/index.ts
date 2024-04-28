import axios from "axios"
import { baseUrl } from "../config"
import { getAxiosInstance } from "@/providers/InstitutionProvider";

type apiActionType = 'post' | 'get' | 'put' | 'delete';

const token = localStorage.getItem('token');
const instance=getAxiosInstance(token);


const getData = async (path: string) => {
    return await api(path, 'get');
}

const 
postData = async (path: string, data: any) => {
    return await api(path, 'post', data);
}

const deleteData = async (path: string) => {
    return await api(path, 'delete');
}

const updateData = async (path: string, data: any) => {
    return await api(path, 'put', data);
}

const api = async (path: string, action: apiActionType, data = {}) => {
    return await instance[action](`${path}`, data).then((res) => {
        return res?.data;
    })
}

export { postData, updateData, deleteData, api, getData };
export type { apiActionType };



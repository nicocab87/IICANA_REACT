import axios from "axios";

const apiUrl ="http://localhost:59776/api/Curso";

export const getCursoById = async (id)=>{
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data
};

export const getCurso = async ()=>{
    const response = await axios.get(apiUrl);
    return response.data
};

export const crearCurso = async (venta)=>{
    const response = await axios.post(apiUrl, venta);
    return response.data
};

export const ModificarCurso = async (id)=>{
    const response = await axios.put(`${apiUrl}/${id}`);
    return response.data
};

export const eleminarCurso = async (id)=>{
    const response = await axios.put(`${apiUrl}/${id}`);
    return response.data
};
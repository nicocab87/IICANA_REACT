import axios from "axios";

const apiUrl ="http://localhost:59776/api";

export const buscarById= async (nombre,id)=>{
    const response = await axios.get(`${apiUrl}/${nombre}/${id}`);
    return response.data
};
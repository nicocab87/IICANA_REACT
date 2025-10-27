import axios from "axios";

const apiUrl ="http://localhost:59776/api/Direccion";

export const crearDireccion = async (Direccion)=>{
    console.log(Direccion)
    const response = await axios.post(apiUrl, Direccion);
    return response.data
};

export const getDireccion = async ()=>{
    const response = await axios.get(apiUrl);
    return response.data
};

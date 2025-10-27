import axios from "axios";

const apiUrl ="http://localhost:59776/api/Alumno";

export const getAlumnoById = async (id)=>{
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data
};

export const getAlumnos = async ()=>{
    const response = await axios.get(apiUrl);
    return response.data
};

export const crearAlumno = async (alumno)=>{
    const response = await axios.post(apiUrl, alumno);
    return response.data
};

export const ModificarAlumno = async (id)=>{
    const response = await axios.put(`${apiUrl}/${id}`);
    return response.data
};

export const DarBajaAlumno = async (id)=>{
    const response = await axios.put(`${apiUrl}/${id}`);
    return response.data
};

export const EliminarAlumno = async (id)=>{
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data
};

/*export const confirmarVenta = async (id,medioPago)=>{
    const response = await axios.put(`${apiUrl}/${id}/confirmarVenta`, JSON.stringify(medioPago),{
    headers: {
        'Content-Type': 'application/json'
    }
    });
    return response.data
}*/

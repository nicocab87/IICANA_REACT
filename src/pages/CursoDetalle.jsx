// src/pages/Alumnos.jsx
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getAlumnosPorCurso, getCursoById } from "../services/cursoService";
import { useParams } from "react-router-dom";

export default function CursoDetalle() {
    const param  = useParams();
    const idCurso = parseInt(param.id);

    const [alumnos, setAlumnos] = useState([]);
    const [curso, setCurso] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
    try {
        const data = await getCursoById(idCurso);
        setCurso(data);
    } catch (error) {
        console.error("Error al traer curso:", error);
    }
    };
    fetchData();
}, [idCurso]);

    useEffect(() => {
    const fetchData = async () => {
    try {
        const data = await getAlumnosPorCurso(idCurso);
        console.log(data, "DATA AKUMNOS")
        setAlumnos(data);
    } catch (error) {
        console.error("Error al traer alumnos:", error);
    }
    };
    fetchData();
}, [idCurso]);


    return (
    <div className='divPrincipalVenta'>
        <div>{curso.Nombre}, {curso.Nivel},{curso.Horario}</div>
        <div className="card">
            <DataTable value={alumnos}>
                <Column field="Nombre" header="Nombre" />
                <Column field="Dni" header="Dni" />
                <Column field="Telefono" header="Telefono" />
                <Column field="Email" header="Email" />
            </DataTable>
        </div>
    </div>
    )}
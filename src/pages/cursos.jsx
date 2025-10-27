import { useEffect, useState } from "react";
import { getCurso } from "../services/cursoService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Navigate, useNavigate } from "react-router-dom";

export default function Cursos() {

    const [cursos, setCursos] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
    try {
        const data = await getCurso();
        setCursos(data);
    } catch (error) {
        console.error("Error al traer alumnos:", error);
    }
    };
    fetchData();
}, []);

const navigate = useNavigate();

    return (
    <div className='divPrincipalVenta'>
        <div className="card">
            <DataTable value={cursos}>
                <Column field="Nombre" header="Nombre" />
                <Column field="Nivel" header="Nivel" />
                <Column field="Horario" header="Horario" />
                <Column field="AñoLectivo" header="Año" />
                <Column 
    body={(rowData) => (
    <Button
                        label="Ver Alumnos"
                        onClick={() => navigate(`/cursos/${rowData.Id}`)}
                        severity="info"
                    />
    )} 
    header="Editar" 
/>
            </DataTable>
        </div>
    </div>
    );
}
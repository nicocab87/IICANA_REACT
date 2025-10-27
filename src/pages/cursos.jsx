import { useEffect, useState } from "react";
import { getCurso } from "../services/cursoService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function Cursos() {

    const [cursos, setCursos] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
    try {
        const data = await getCurso();
        console.log("data", data)
        setCursos(data);
    } catch (error) {
        console.error("Error al traer alumnos:", error);
    }
    };
    fetchData();
}, []);


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
        onClick={() => console.log(rowData)} 
        label="Ver Curso" 
        severity="help"
    />
    )} 
    header="Editar" 
/>
            </DataTable>
        </div>
    </div>
    );
}
// src/pages/Alumnos.jsx
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getAlumnos } from "../services/alumnoService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import BottomLinear from "../components/botonesDespegables";

function Alumnos() {

    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
    try {
        const data = await getAlumnos();
        console.log("data", data)
        setAlumnos(data);
    } catch (error) {
        console.error("Error al traer alumnos:", error);
    }
    };
    fetchData();
}, []);


    return (
    <div className='divPrincipalVenta'>
        <div className="card">
            <DataTable value={alumnos}>
                <Column field="Nombre" header="Nombre" />
                <Column field="Curso" header="Curso" />
                <Column field="Dni" header="Dni" />
                <Column field="Telefono" header="Telefono" />
                <Column field="Email" header="Email" />
                <Column body={(rowData) => <BottomLinear alumno={rowData} />} header="Editar" />
            </DataTable>
        </div>
    </div>
    );
}

export default Alumnos;

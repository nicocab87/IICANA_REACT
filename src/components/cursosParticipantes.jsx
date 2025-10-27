
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getAlumnosPorCurso, getCurso } from '../services/cursoService';

export default function GridLines() {
    const [cursos, setCursos] = useState([]);

useEffect(() => {
    const fetchCursosConAlumnos = async () => {
        try {
        // 1️⃣ Traer todos los cursos
        const cursosData = await getCurso();

        // 2️⃣ Para cada curso, traer la cantidad de alumnos
        const cursosConTotal = await Promise.all(
            cursosData.map(async (curso) => {
            const alumnos = await getAlumnosPorCurso(curso.Id);
            return {
                ...curso,
              totalAlumnos: alumnos.length, // Agrego nuevo campo
            };
            })
        );

        // 3️⃣ Actualizar estado
        setCursos(cursosConTotal);
        } catch (error) {
        console.error("Error al traer cursos y alumnos:", error);
        }
    };

    fetchCursosConAlumnos();
    }, []);

    return (
        <div className="card">
            <DataTable value={cursos} showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="Nombre" header="Nombre"></Column>
                <Column field="Horario" header="Horario"></Column>
                <Column field="totalAlumnos" header="Total Alumnos"></Column>
            </DataTable>
        </div>
    );
}
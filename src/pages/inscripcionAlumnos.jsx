import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import {getCurso}  from '../services/cursoService'; // tu servicio para traer cursos
import { crearAlumno } from '../services/alumnoService';
import { crearDireccion, getDireccion} from '../services/direccionService';
import { useNavigate } from 'react-router-dom';

export default function InscripcionAlumno() {
    const navigate = useNavigate()
    const [alumno, setAlumno] = useState({
        dni: '',
        nombre: '',
        calle: '',
        numeracion: '',
        barrio: '',
        telefono: '',
        email: '',
        curso: null,
    });

    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                const data = await getCurso();
                setCursos(data);
            } catch (error) {
                console.error("Error al traer cursos:", error);
            }
        };
        fetchCursos();
    }, []);

    const handleChange = (e, field) => {
        setAlumno({ ...alumno, [field]: e.target.value });
    };

    const handleCursoChange = (e) => {
        setAlumno({ ...alumno, curso: e.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // previene recarga de página
        if (!alumno.curso) {
            alert("Seleccione un curso");
            return;
        }

await crearDireccion({
    Calle: alumno.calle,
    Numeracion: alumno.numeracion,
    Barrio: alumno.barrio
});

const nuevaDireccion = async()=>{
    let direcciones = await getDireccion()
    let dire = direcciones[direcciones.length - 1]

    console.log(direcciones,"Direcciones")
    console.log(dire,"dire")

    console.log(alumno.curso.Id, "id Curso")
    const payload = {
        Dni: alumno.dni,
        Nombre: alumno.nombre,
        IdDireccion: dire.Id, // 🔑 usar el Id retornado
        Telefono: alumno.telefono,
        Email: alumno.email,
        IdCurso: alumno.curso.Id
    };

        try 
        {
            crearAlumno(payload)
            navigate("/alumnos")
        } catch (error) {
            console.error("Error al inscribir alumno:", error);
            alert("Error al inscribir alumno");
        } finally {
            setLoading(false);
        }
}

    nuevaDireccion()

};

    return (
        <form onSubmit={handleSubmit} className="card flex flex-column md:flex-row gap-3 flex-wrap">

            {/* DNI */}
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">DNI</span>
                <InputText 
                    placeholder="Ingrese DNI" 
                    value={alumno.dni} 
                    onChange={(e) => handleChange(e, 'dni')} 
                />
            </div>

            {/* Nombre */}
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">Nombre</span>
                <InputText 
                    placeholder="Ingrese nombre" 
                    value={alumno.nombre} 
                    onChange={(e) => handleChange(e, 'nombre')} 
                />
            </div>

            {/* Calle */}
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">Calle</span>
                <InputText 
                    placeholder="Ingrese calle" 
                    value={alumno.calle} 
                    onChange={(e) => handleChange(e, 'calle')} 
                />
            </div>

            {/* Numeración */}
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">Numeración</span>
                <InputText 
                    placeholder="Ingrese número" 
                    value={alumno.numeracion} 
                    onChange={(e) => handleChange(e, 'numeracion')} 
                />
            </div>

            {/* Barrio */}
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">Barrio</span>
                <InputText 
                    placeholder="Ingrese barrio" 
                    value={alumno.barrio} 
                    onChange={(e) => handleChange(e, 'barrio')} 
                />
            </div>

            {/* Teléfono */}
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">Teléfono</span>
                <InputText 
                    placeholder="Ingrese teléfono" 
                    value={alumno.telefono} 
                    onChange={(e) => handleChange(e, 'telefono')} 
                />
            </div>

            {/* Email */}
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">Email</span>
                <InputText 
                    placeholder="Ingrese email" 
                    value={alumno.email} 
                    onChange={(e) => handleChange(e, 'email')} 
                />
            </div>

            {/* Curso */}
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">Curso</span>
                <Dropdown 
                    value={alumno.curso} 
                    options={cursos} 
                    onChange={handleCursoChange} 
                    optionLabel="Nombre" 
                    placeholder="Seleccione un curso"
                />
            </div>

            {/* Botón de submit */}
            <div className="flex w-full mt-3">
                <Button label={loading ? "Enviando..." : "Inscribir Alumno"} type="submit" disabled={loading} />
            </div>

        </form>
    );
}

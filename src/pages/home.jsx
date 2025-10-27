import { Calendar } from "primereact/calendar";
import "../styles/home.css"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import GridLines from "../components/cursosParticipantes";


const Home = ()=>{

    const navigate = useNavigate();

    const irAOtraPag =(dir)=>{
        navigate(dir)
    }
    const [date, setDate] = useState(null);
    
    return (
        <div className="divPrincipal">
            <div className="divSecundario">
                <div className="lista text-black fs-2  w-100 rounded-5" onClick={()=>irAOtraPag("/alumnos")} >
                    <GridLines/>
                </div>
                <Calendar className="calendario card flex justify-content-center" value={date} onChange={(e) => setDate(e.value)} inline showWeek />
                <div className="novedades text-black fs-2 w-100 rounded-5">
                    <h3 className="justify-self-center align-self-center">Novedades</h3>
                </div>
            </div>
        </div>
    )
}

export default Home;
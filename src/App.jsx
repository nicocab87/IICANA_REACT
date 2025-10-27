import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from "./pages/home";
import Alumnos from "./pages/alumnos";
import Layout from "./components/layout";
import Cursos from "./pages/cursos";
import CursoDetalle from "./pages/CursoDetalle";
import InscripcionAlumno from "./pages/inscripcionAlumnos";


function App() {
  return (
    <BrowserRouter>
    <PrimeReactProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Redirige al home por defecto */}
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/alumnos" element={<Alumnos />} /> 
          <Route path="/alumnos/nuevo" element={<InscripcionAlumno />} /> 
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/:id" element={<CursoDetalle/>} />
        </Route>
      </Routes>
      </PrimeReactProvider>
    </BrowserRouter>
  );
}

export default App;

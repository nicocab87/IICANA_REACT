import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';  
import 'primereact/resources/primereact.min.css';  
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";

// Importar CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Tus estilos globales si tenés

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

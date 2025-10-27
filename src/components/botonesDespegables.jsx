import React, { useRef } from "react";
import { SpeedDial } from "primereact/speeddial";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom"; 
import "../styles/circleDemo.css"

export default function BottomLinear({alumno}) {
    const toast = useRef(null);
    const navigate = useNavigate();

    const items = [
    {
        label: "Add",
        icon: "pi pi-pencil",
        command: () => {
        toast.current.show({ severity: "info", summary: "Add", detail: "Data Added" });
        },
    },
    {
        label: "Update",
        icon: "pi pi-refresh",
        command: () => {
        toast.current.show({ severity: "success", summary: "Update", detail: "Data Updated" });
        },
    },
    {
        label: "Delete",
        icon: "pi pi-trash",
        command: () => {
            console.log(alumno)
        toast.current.show({ severity: "error", summary: "Delete", detail: "Data Deleted" });
        },
    },
    {
        label: "Upload",
        icon: "pi pi-upload",
        command: () => {
        navigate("/fileupload");
        },
    }
    ];

    return (
    <div className="card">
        <div
        style={{
          height: "70px", // 👈 más compacto
            position: "relative",
        }}
        className="flex align-items-center justify-content-center"
        >
        <Toast ref={toast} />
        <SpeedDial
            model={items}
          radius={60} // 👈 menor distancia entre íconos
            type="circle"
            buttonClassName="p-button-warning small-circle-dial"
            className="small-circle-wrapper"
        />
        </div>
        </div>
    );
}

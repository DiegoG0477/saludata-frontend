import React, {useEffect, useState} from "react";
import "../App.css";
import DatePick from "./atoms/DatePick";
import ColumnButton from "./atoms/ColumnButton";
import "../styles/uploadFile.css";
import "../assets/uploadfile.png";
import InputLabel from "./atoms/InputLabel";
import axios from "axios";
import {Link} from "react-router-dom";


function RecentFile(props) {
    const [pacientes, setPacientes] = useState([]);

    const getPacientes = () => {
        axios
            .get("http://localhost:8080/api/v1/pacientes")
            .then((response) => {
                setPacientes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const [archivos, setArchivos]=useState([]);
    const getArchivos=()=>{
        axios
            .get("http://localhost:8080/api/v1/archivos")
        .then((response)=>{
            setArchivos(response.data);
        })
            .catch((error)=>{
                console.log(error);
            });
    };

    useEffect(()=>{
        getArchivos();
    },[]);

    useEffect(() => {
        getPacientes();
    }, []);

    useEffect(() => {
        getPacientes();
        getArchivos();
    }, []);
    function filterPacientesConArchivo(pacientes, archivos) {
        return pacientes.filter((paciente) => archivos.some((archivo) => archivo.idPaciente === paciente.id));
    }

    const pacientesConArchivo = filterPacientesConArchivo(pacientes, archivos);


    const [selectedModal, setSelectedModal] = useState(null);

    return (
        <>
            <div className="system-content">
                <h4 style={{ fontWeight: "bold" }}>{props.title}</h4>
                <h6 style={{ fontWeight: "bold" }}>{props.text}</h6>

                {/* width:"82vw" */}
                <div
                    style={{
                        marginTop: "3vh",
                        display: "flex",
                        justifyContent: "space-between",
                        width: props.ancho + "vw",
                        marginBottom: "-3vh",
                    }}
                >
                    <InputLabel
                        text="Nombres del Paciente"
                        holder="Ingrese el nombre(s) del paciente"
                        ancho={props.labelAncho}
                    />
                    <InputLabel
                        text="Apellido Paterno Paciente"
                        holder="Ingrese apellido paterno del paciente"
                        ancho={props.labelAncho}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: props.ancho + "vw",
                        marginTop: "2vw",
                    }}
                >
                    <InputLabel
                        text="Apellido Materno del Paciente"
                        holder="Ingrese apellido materno del paciente"
                        ancho={props.labelAncho}
                    />
                    <div style={{ marginRight: props.mover + "vw" }}>
                        <p
                            // htmlFor="birthdate"
                            className="form-label"
                            style={{ fontWeight: "bold" }}
                        >
                            Fecha de Nacimiento del Paciente
                        </p>

                        <div
                            className="input-search-container"
                            style={{ width: props.anchoPicker + "vw", height: "8vh" }}
                        >
                            <DatePick className="date" format="dd/MM/yyyy" />
                            <button className="btn btn-primary globalButton">Buscar</button>
                        </div>
                    </div>
                </div>

                <div>
                    <table className="tablaS" style={{ width: "78vw" }}>
                        <thead>
                        <tr>
                            <th scope="col" className="left-th">
                                Nombre Completo
                            </th>
                            <th scope="col">Nombre Archivo</th>
                            <th scope="col" className="right-th">
                                Acción
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {pacientesConArchivo.map((paciente) => {
                            // Encontrar el archivo correspondiente al paciente
                            const archivo = archivos.find((a) => a.idPaciente === paciente.id);
                            return (
                                <tr key={paciente.id}>
                                    <th scope="row">
                                        {paciente.nombre + " " + paciente.apellidoPat + " " + paciente.apellidoMat}
                                    </th>
                                    <td>{archivo.nombreArchivo}</td>
                                    <td>
                                        <div type="button" onClick={() => openModal(archivo.url)}>
                                            <ColumnButton color={props.color} text={props.botonText}></ColumnButton>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="modal fade" id="modalVer" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content modal-window-content">
                        <div className="modal-body">
                            <div className="modal-body">
                                <img
                                    src="https://saludatafile.s3.amazonaws.com/1690172199447_tarjeta-identificacion.jpg"
                                    alt="Imagen del archivo"
                                    style={{ maxWidth: "100%" }}
                                />
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default RecentFile;
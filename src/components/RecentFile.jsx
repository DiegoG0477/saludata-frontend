import React, { useEffect, useState } from "react";
import "../App.css";
import DatePick from "./atoms/DatePick";
import ColumnButton from "./atoms/ColumnButton";
import "../styles/uploadFile.css";
import "../assets/uploadfile.png";
import InputLabel from "./atoms/InputLabel";
import axios from "axios";
import { Link } from "react-router-dom";


function RecentFile(props) {
    const [archivos, setArchivos] = useState([]);
    const [pacientes, setPacientes] = useState([]);

    const getArchivos = () => {
        axios
            .get("http://localhost:8080/api/v1/archivos/ver")
            .then((response) => {
                setArchivos(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getArchivos();
    }, []);
    console.log(archivos);

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

    useEffect(() => {
        getPacientes();
    }, []);


    function simplificarFecha(fechaCompleta) {
        const fecha = new Date(fechaCompleta);

        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
        const año = fecha.getFullYear();

        // Formatear la fecha como 'dd/mm/yyyy' o 'mm/dd/yyyy' (dependiendo de tu preferencia)
        const fechaSimplificada = `${dia < 10 ? "0" : ""}${dia}/${
            mes < 10 ? "0" : ""
        }${mes}/${año}`;

        return fechaSimplificada;
    }

    function calcularEdad(fechaNacimiento) {
        const fechaActual = new Date();
        const diferencia = fechaActual - fechaNacimiento;

        // Convertir la diferencia a años
        const edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
        return edad;
    }

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
                            <th scope="col">Teléfono</th>
                            <th scope="col">Edad</th>
                            <th scope="col" className="right-th">
                                Acción
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {pacientes.map((val) => (
                            <tr>
                                <th scope="row">
                                    {val.nombre + " " + val.apellidoPat + " " + val.apellidoMat}
                                </th>
                                <td>{val.telefono}</td>
                                <td>
                                    {calcularEdad(new Date(val.fechaNacimiento)) + " años"}
                                </td>
                                <td>
                                    <div type="button">
                                        <Link to={`/verPrueba/${val.idPaciente}`}>
                                            <ColumnButton
                                                color={props.color}
                                                text={props.botonText}
                                            ></ColumnButton>
                                        </Link>
                                    </div>

                                </td>
                            </tr>
                        ))}
                        </tbody>
                        {/*<thead>
                            <tr>
                                <th scope="col" className="left-th">
                                    Nombre Completo
                                </th>
                                <th scope="col">
                                    Nombre Archivo
                                </th>
                                <th scope="col" className="right-th">
                                    Acción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pacientes.map((val) => (
                                <tr key={val[0]}>
                                    <th scope="row">
                                        {val[1] + " " + val[3] + " " + val[2]}
                                    </th>
                                    <td>
                                        {val[4]}
                                    </td>
                                    <td>
                                        <div type="button" >
                                            <ColumnButton abrir="#modalVer" color={props.color} text={props.botonText}></ColumnButton>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>*/}
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
                                    src={archivos[0]?.[5]}
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

            <div className="modal fade" id="modalVer" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-xl">
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
                            <button type="button" className="btn btn-primary">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecentFile;
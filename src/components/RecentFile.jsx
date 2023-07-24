import React, { useRef, useState } from "react";
import "../App.css";
import DatePick from "./atoms/DatePick";
import ColumnButton from "./atoms/ColumnButton";
import "../styles/uploadFile.css";
import "../assets/uploadfile.png";
import InputLabel from "./atoms/InputLabel";
import PacientSearch from "./PacientSearch.jsx";

function RecentFile(props) {

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
                        <tr>
                            <th scope="row">Ejemplo Persona</th>
                            <td>9611111111</td>
                            <td>24 Años</td>
                            <td>
                                <div
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalVer"                                >
                                    <ColumnButton
                                        color={"#248087"}
                                        text={"ver mas"}
                                    ></ColumnButton>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>aaaa</td>
                            <td>Ojfjfo</td>
                            <td>@mui</td>
                        </tr>
                        </tbody>
                    </table>
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
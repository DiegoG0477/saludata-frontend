import React, {useRef, useState} from "react";
import "../App.css";
import { DatePicker } from "@mui/x-date-pickers";
import ColumnButton from "./atoms/ColumnButton";
import '../styles/uploadFile.css';
import "../assets/uploadfile.png"

function UploadFile() {

    return (
        <>
            <div className="system-content">
                <h4 style={{ fontWeight: "bold" }}>Registro de Pacientes</h4>
                <h6 style={{ fontWeight: "bold" }}>
                    Ingrese los datos de un paciente para su búsqueda o revise el registro
                    general de pacientes
                </h6>

                {/* width:"82vw" */}
                <div
                    style={{
                        marginTop: "3vh",
                        display: "flex",
                        justifyContent: "space-between",
                        width: "78vw",
                        marginBottom: "-3vh",
                    }}
                >
                    <div>
                        <label
                            for="pacient-names"
                            className="form-label"
                            style={{ fontWeight: "bold" }}
                        >
                            Nombre(s) del Paciente
                        </label>
                        <input
                            type="text"
                            className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                            id="pacients-names"
                            placeholder="Ingrese el nombre(s) del paciente"
                            style={{ width: "36vw", height: "8vh" }}
                        />
                    </div>

                    <div>
                        <label
                            for="pacient-lastnames"
                            className="form-label"
                            style={{ fontWeight: "bold" }}
                        >
                            Apellidos del Paciente
                        </label>
                        <input
                            type="text"
                            className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                            id="pacients-lastnames"
                            placeholder="Ingrese los apellidos del paciente"
                            style={{ width: "36vw", height: "8vh" }}
                        />
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "78vw",
                    }}
                >
                    <div>
                        <label
                            for="pacient-lastnames"
                            className="form-label"
                            style={{ fontWeight: "bold" }}
                        >
                            Apellidos del Paciente
                        </label>
                        <input
                            type="text"
                            className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                            id="pacients-lastnames"
                            placeholder="Ingrese los apellidos del paciente"
                            style={{ width: "36vw", height: "8vh" }}
                        />
                    </div>

                    <div>
                        <p
                            // htmlFor="birthdate"
                            className="form-label"
                            style={{ fontWeight: "bold" }}
                        >
                            Fecha de Nacimiento del Paciente
                        </p>

                        {/* <DatePicker style={{ width: "36vw", height: "8vh" }}/> */}

                        {/* defaultValue={("2022-04-17")} */}
                        <div className="input-search-container" style={{ width: "36vw", height: "8vh"}}>
                            <DatePicker />
                            <button className="btn btn-primary globalButton" data-bs-toggle="modal" data-bs-target="#modal-subir">Buscar</button>
                        </div>
                    </div>
                </div>

                <div>
                    <table className="tablaS" style={{width:"80vw"}}>
                        <thead>
                        <tr>
                            <th scope="col" className="left-th">Nombre Completo</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Edad</th>
                            <th scope="col" className="right-th" >Acción</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Ejemplo Persona</th>
                            <td>9611111111</td>
                            <td>24 Años</td>
                            <td>

                                <div type="button" data-bs-toggle="modal" data-bs-target="#modal-subir">
                                    <ColumnButton color={"#248087"} text={"Subir archivo"}></ColumnButton>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>dssdak</td>
                            <td>Ojfjfo</td>
                            <td>@mui</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>



            <div className="modal fade" id="modal-subir" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h5 className="modal-title">Elija su archivo a subir</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <div className="square-container">
                                <div className="square">
                                    <img src="/src/assets/uploadfile.png" alt="Imagen" />
                                </div>
                                <div className="button-container">
                                    <div className="message">Arrastre el archi aquí o busque en su explorador de archivos</div>

                                    <button className="button">Buscar</button>
                                </div>
                            </div>
                        </div>


                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <button className="btn btn-primary">Subir</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UploadFile;
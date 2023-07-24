import "../App.css";
import DatePick from "./atoms/DatePick";
import ColumnButton from "./atoms/ColumnButton";
import InputLabel from "./atoms/InputLabel";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PacientSearch(props) {
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
            {props.modal ? (
              <p
                // htmlFor="birthdate"
                className="form-label"
                style={{ fontWeight: "bold", marginLeft: "5vw" }}
              >
                Fecha de Nacimiento del Paciente
              </p>
            ) : (
              <p
                // htmlFor="birthdate"
                className="form-label"
                style={{ fontWeight: "bold" }}
              >
                Fecha de Nacimiento del Paciente
              </p>
            )}

            <div
              className="input-search-container"
              style={{
                width: props.anchoPicker + "vw",

                height: "8vh",
              }}
            >
              {props.modal ? (
                <>
                  <div style={{ marginLeft: "5vw", marginRight: "3vw" }}>
                    <DatePick className="date" format="dd/MM/yyyy" />
                  </div>

                  <button className="btn globalButton">Buscar</button>
                </>
              ) : (
                <>
                  <DatePick className="date" format="dd/MM/yyyy" />
                  <button className="btn globalButton">Buscar</button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="tabla-container"  style={{maxHeight:"30vh", overflow:"auto"}}>
          <table class="tablaS" style={{ width: props.ancho + "vw",}}>
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
                      <Link to={`/pacient-summary/${val.idPaciente}`}>
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
          </table>
        </div>
      </div>
    </>
  );
}

export default PacientSearch;

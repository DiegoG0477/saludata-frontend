import Title from "../atoms/Title";
import "../../styles/organisms.css";
import "../../styles/atoms.css";
import InputLabel from "../atoms/InputLabel";
import DatePick from "../atoms/DatePick";
import ColumnButton from "../atoms/ColumnButton";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function MedDateSearch(props) {
  const [consultas, setConsultas] = useState([]);
  const [nombres, setNombres] = useState([]);

  const getConsultas = () => {
    axios
      .get("http://localhost:8080/api/v1/consultas")
      .then((response) => {
        setConsultas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getNombres = () => {
    axios
    .get("http://localhost:8080/api/v1/consultas/pacientes")
    .then((response) => {
      setNombres(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

  useEffect(() => {
    getConsultas();
    getNombres();
  }, []);

  const dataCombinada = consultas.map((consulta) => {
    const idPacienteConsulta = consulta.id.idPaciente;
    const paciente = nombres.find((p) => p.idPaciente === idPacienteConsulta);

    const nombreCompleto = paciente
      ? `${paciente.nombre} ${paciente.apellidoPat} ${paciente.apellidoMat}`
      : "Nombre no encontrado";

    return {
      idPaciente: consulta.id.idPaciente,
      nombreCompleto,
      fecha: consulta.id.fecha,
      motivoConsulta: consulta.motivoConsulta,
    };
  });

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
  
  return (
    <>
      <div className="system-content">
        <Title text="Historial de Consultas"></Title>
        <h6 style={{ fontWeight: "bold" }}>
          Ingrese los datos de la consulta a buscar
        </h6>

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
              Fecha de Consulta
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

        <div
          className="tabla-container"
          style={{ maxHeight: "30vh", overflow: "auto" }}
        >
          <table class="tablaS" style={{ width: "78vw" }}>
            <thead>
              <tr>
                <th scope="col" className="left-th">
                  Nombre Completo
                </th>
                <th scope="col">Fecha</th>
                <th scope="col">Motivo de Consulta</th>
                <th scope="col" className="right-th">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {dataCombinada.map((data) => (
                <tr key={data.idPaciente}>
                  <th scope="row">{data.nombreCompleto}</th>
                  <td>{simplificarFecha(data.fecha)}</td>
                  <td>{data.motivoConsulta}</td>
                  <td>
                    <div type="button">
                      <Link to={`/pacient-summary/${data.idPaciente}`}>
                        <ColumnButton color={props.color} text={props.botonText} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* {consultas.map((val) => (
                <tr>
                  <th scope="row">
                    {val.nombre + " " + val.apellidoPat + " " + val.apellidoMat}
                  </th>
                  <td>{val.telefono}</td>
                  <td>
                    {" años"}
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
              ))} */}
              {/* <tr>
                <th scope="row">Ejemplo Persona</th>
                <td>9611111111</td>
                <td>24 Años</td>
                <td>
                  <div type="button">
                    <ColumnButton
                      color={"#248087"}
                      text={"Ver mas"}
                      to="/file-summary"
                    ></ColumnButton>
                  </div>{" "}
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>dssdak</td>
                <td>Ojfjfo</td>
                <td>@mui</td>
              </tr> */}
          </table>
        </div>
      </div>
    </>
  );
}

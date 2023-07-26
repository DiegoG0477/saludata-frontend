import Title from "../atoms/Title";
import "../../styles/organisms.css";
import "../../styles/atoms.css";
import InputLabel from "../atoms/InputLabel";
import DatePick from "../atoms/DatePick";
import ColumnButton from "../atoms/ColumnButton";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function MedDateSearch(props) {
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getConsultas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/consultas/tabla"
        );
        setConsultas(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getConsultas();
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

          <InputLabel text="Nombres del Paciente" holder="Ingrese el nombre(s) del paciente" ancho={props.labelAncho} />
          <InputLabel text="Apellido Paterno Paciente" holder="Ingrese apellido paterno del paciente" ancho={props.labelAncho} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: props.ancho + "vw",
            marginTop: "2vw"
          }}
        >
          <InputLabel text="Apellido Materno del Paciente" holder="Ingrese apellido materno del paciente" ancho={props.labelAncho} />
          <div style={{ marginRight: props.mover + "vw" }}>
            <p
              // htmlFor="birthdate"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Fecha de Consulta
            </p>

            <div className="input-search-container" style={{ width: props.anchoPicker + "vw", height: "8vh" }}>
              <DatePick className="date" format="dd/MM/yyyy" />
              <button className="btn btn-primary globalButton">Buscar</button>
            </div>
          </div>

        </div>

        <div className="tabla-container"  style={{maxHeight:"30vh", overflow:"auto"}}>
          <table class="tablaS" style={{ width: "78vw"}}>
            <thead>
              <tr>
                <th scope="col" className="left-th">Nombre Completo</th>
                <th scope="col">Fecha</th>
                <th scope="col">Diagnóstico</th>
                <th scope="col" className="right-th">Acción</th>
              </tr>
            </thead>
            <tbody>
            {consultas.map((val) => (
                <tr key={val[3]}>
                  <th scope="row">{val[0]+" "+val[1]+" "+val[2]}</th>
                  <td>{simplificarFecha(val[4])}</td>
                  <td>{val[5]}</td>
                  <td>
                    <div type="button">
                      <Link to={`/file-summary/${val[3]}`} >
                      <ColumnButton
                        color={"#248087"}
                        text={"Ver mas"}
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

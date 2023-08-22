import ColumnButton from "../atoms/ColumnButton";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
export default function ServicesTable({ id }) {
  const [consultas, setConsultas] = useState([]);
  const getConsultas = () => {
    axios
      .get("http://localhost:8080/api/v1/consultas/paciente/" + id)
      .then((response) => {
        setConsultas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
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
    <div
      className="tabla-container"
      style={{ maxHeight: "60vh", overflow: "auto" }}
    >
      <table class="tablaS" style={{ width: "29vw", marginTop: "5vh" }}>
        <thead>
          <tr>
            <th scope="col" className="left-th">
              Fecha
            </th>
            <th scope="col">Motivo</th>
            <th scope="col" className="right-th">
              Acción
            </th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((val) => (
            // <tr key={val.id}>
            <tr>
              <td>{simplificarFecha(val.id.fecha)}</td>
              <td>{val.motivoConsulta}</td>
              <td>
                <Link
                  to={`/file-summary/${id}/${simplificarFecha(val.id.fecha)}`}
                >
                  <ColumnButton text="Ver Más" color="#248087" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

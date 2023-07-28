import Title from "../atoms/Title";
import "../../styles/organisms.css";
import "../../styles/atoms.css";
import InputLabel from "../atoms/InputLabel";
import DatePick from "../atoms/DatePick";
import ColumnButton from "../atoms/ColumnButton";
import "../../App.css";
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
    const dia = fecha.getDate() +1;
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
      <Title text="Historial de Consultas" />
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
        {/* Contenido para el formulario de búsqueda de fecha */}
        <div style={{ marginRight: props.mover + "vw" }}>
          <p className="form-label" style={{ fontWeight: "bold" }}>
            Fecha de Consulta
          </p>
          <div className="input-search-container" style={{ width: props.anchoPicker + "vw", height: "8vh" }}>
            <DatePick className="date" format="dd/MM/yyyy" />
            <button className="btn btn-primary globalButton">Buscar</button>
          </div>
        </div>
      </div>

      <div className="tabla-container" style={{ maxHeight: "30vh", overflow: "auto" }}>
        <table className="tablaS" style={{ width: "78vw" }}>
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
            {
              consultas.map((consulta, index) => (
                <tr key={index}>
                  <td>{`${consulta[0]} ${consulta[1]} ${consulta[2]}`}</td>
                  <td>{simplificarFecha(consulta[4])}</td>
                  <td>{consulta[5]}</td>
                  <td>
                  <div type="button">
                      <Link to={`/file-summary/${consulta[3]}/${consulta[4]}`}>
                        <ColumnButton
                          color={props.color}
                          text={props.botonText}
                        ></ColumnButton>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>


      </> 
      );

}
        
                        
                

                  
              
          
   
              


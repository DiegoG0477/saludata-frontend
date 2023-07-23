import "../App.css";
import DatePick from "./atoms/DatePick"
import ColumnButton from "./atoms/ColumnButton";
import Input from "./atoms/Input";
import InputLabel from "./atoms/InputLabel";
import React from "react";



function PacientSearch(props) {

  return (
    <>
      <div className="system-content">
        <h4 style={{ fontWeight: "bold" }}>{props.title}</h4>
        <h6 style={{ fontWeight: "bold" }}>
          {props.text}
        </h6>

        {/* width:"82vw" */}
        <div
          style={{
            marginTop: "3vh",
            display: "flex",
            justifyContent: "space-between",
            width: props.ancho+"vw",
            marginBottom: "-3vh",
          }}
        >
          
          <InputLabel text="Nombres del Paciente" holder="Ingrese el nombre(s) del paciente" ancho={props.labelAncho}/>
          <InputLabel text="Apellido Paterno Paciente" holder="Ingrese apellido paterno del paciente" ancho={props.labelAncho}/>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: props.ancho+"vw",
            marginTop:"2vw"
          }}
        >
          <InputLabel text="Apellido Materno del Paciente" holder="Ingrese apellido materno del paciente" ancho={props.labelAncho}/>
          <div style={{marginRight:props.mover+"vw"}}>
            <p
              // htmlFor="birthdate"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Fecha de Nacimiento del Paciente
            </p>

            <div className="input-search-container" style={{ width: props.anchoPicker+"vw", height: "8vh"}}>
              <DatePick className="date" format="dd/MM/yyyy" />
              <button className="btn btn-primary globalButton">Buscar</button>
            </div>
          </div>
          
        </div>
        
        <div>
          <table class="tablaS" style={{width:props.ancho+"vw"}}>
            <thead>
              <tr>
                <th scope="col" className="left-th">Nombre Completo</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Edad</th>
                <th scope="col" className="right-th">Acción</th>
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
                  >
                    <ColumnButton
                        color={"#248087"}
                        text={"Ver mas"}
                        to="/pacient-summary"
                    ></ColumnButton>
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
    </>
  );
}

export default PacientSearch;

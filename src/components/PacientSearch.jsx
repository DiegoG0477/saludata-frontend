import React from "react";
import "../App.css";

function PacientSearch() {
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
            marginTop: "3vh",
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
        </div>
      </div>
    </>
  );
}

export default PacientSearch;

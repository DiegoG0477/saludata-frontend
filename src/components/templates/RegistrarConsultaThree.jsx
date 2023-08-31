import InputLabel from "../atoms/InputLabel";
import NextButton from "../atoms/NextButton";
import ReturnButton from "../atoms/ReturnButton";
import { useState } from "react";
import { consultaDatos } from "../../data";
import RegistrarConsultaFive from "./RegistrarConsultaFour";

export default function RegistrarConsultaThree(props) {
  const [motivoConsulta, setMotivoConsulta] = useState("");
  const [sintomasIniciales, setSintomasIniciales] = useState("");
  const [estudios, setEstudios] = useState("");

  function guardarDatos() {
    consultaDatos.motivoConsulta = motivoConsulta;
    consultaDatos.sintomasIniciales = sintomasIniciales;
    consultaDatos.estudiosPrevios = estudios;
    console.log(consultaDatos);
  }

  return (
    <>
      <div
        class="modal fade"
        id="modalPaciente2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content modal-window-content">
            <div class="modal-body">
              <h4 className="modal-win-title">Registrar Consulta</h4>
              <h6 className="modal-win-title">
                Por favor, rellene los campos de informacion
              </h6>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel
                  text="Motivo de la Consulta"
                  holder="Ingrese el Motivo de la Consulta"
                  ancho={30}
                  metodo={setMotivoConsulta}
                />
                <InputLabel
                  text="Sintomas de iniciación"
                  holder="Ingrese los Sintomas de Iniciacion del Paciente"
                  ancho={30}
                  metodo={setSintomasIniciales}
                />
              </div>
              <div
                style={{
                  marginTop: "1vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel
                  text="Estudios Previos"
                  holder="Ingrese los Estudios Previos"
                  ancho={15}
                  metodo={setEstudios}
                />
              </div>
            </div>
            <div class="modal-footer">
              <ReturnButton page="#modalRegConsulta"></ReturnButton>
              <NextButton
                page="#modalPaciente4"
                accion={guardarDatos}
              ></NextButton>
            </div>
          </div>
        </div>
      </div>
      <RegistrarConsultaFive></RegistrarConsultaFive>
    </>
  );
}

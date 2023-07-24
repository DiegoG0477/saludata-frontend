import InputLabel from "../atoms/InputLabel";
import "../../styles/organisms.css";
import "../../styles/atoms.css";
import PacientSearch from "../PacientSearch";
import React from "react";
import addPacient from "../../assets/pacient.png";
import SaveIcon from "@mui/icons-material/Save.js";
import Card from "../Card.jsx";
import consulta from "../../assets/consulta.png";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd.js";
import FichaIdPacienteR from "./FichaIdPacienteR";
import AntecedentesModalW from "./AntecedentesModalW";
import PatologicosModalW from "./PatologicosModalW";
import GinecologicosModalW from "./GinecologicosModalW";

export default function ModalsWindows() {
  return (
    <>
      <FichaIdPacienteR></FichaIdPacienteR>
      <AntecedentesModalW></AntecedentesModalW>
      <PatologicosModalW></PatologicosModalW>
      <GinecologicosModalW></GinecologicosModalW>

      {/* ----------- Modal de Consulta ------------ */}


      <div
        className="modal fade"
        id="modalConsulta"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content modal-window-content">
            <div className="modal-body">
              <h4 className="modal-win-title">Registrar Consulta</h4>
              <h6 className="modal-win-title">
                Por favor, rellene los campos de informacion
              </h6>

              <div className="two-inputs-div">
                <Card
                  title="Registrar nuevo Paciente"
                  img={addPacient}
                  buttonText={"Añadir"}
                  icon={
                    <SaveIcon
                      style={{ fontSize: "1.4rem", marginTop: "-5px" }}
                    ></SaveIcon>
                  }
                  num={1}
                  buttonAttributes={{
                    "data-bs-dismiss": "modal",
                  }}
                ></Card>
                <Card
                  title="Expediente del Paciente"
                  img={consulta}
                  buttonText="Registrar"
                  data-bs-dismiss="modal"
                  icon={
                    <BookmarkAddIcon
                      style={{ fontSize: "1.4rem", marginTop: "-5px" }}
                    ></BookmarkAddIcon>
                  }
                  num={4}
                ></Card>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button className="btn btn-primary">Subir</button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="modalPaciente"
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
                  text="Altura"
                  holder="Ingrese la Altura en CM"
                  ancho={13}
                />
                <InputLabel
                  text="Peso"
                  holder="Ingrese el Peso en KG"
                  ancho={13}
                />
                <InputLabel
                  text="Peso Prenatal"
                  holder="Ingrese el Peso en KG"
                  ancho={13}
                />
                <InputLabel text="Talla" holder="Ingrese la Talla" ancho={10} />
                <InputLabel text="Temperatura" holder="Celsius" ancho={10} />
              </div>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel
                  text="FC(Fracuencia Cardiaca)"
                  holder="0/0"
                  ancho={7}
                />
                <InputLabel
                  text="FR(Frecuencia Respiratoria)"
                  holder="0/0"
                  ancho={7}
                />
                <InputLabel
                  text="PA(Presion Arterial)"
                  holder="0/0"
                  ancho={7}
                />
                <InputLabel
                  text="Otro(Opcional)"
                  holder="Opcional"
                  ancho={16}
                />
              </div>
              <div
                style={{
                  backgroundColor: "#D9D9D9",
                  width: "65vw",
                  height: "14vw",
                  marginTop: "2vw",
                  borderRadius: "0.5vw",
                }}
              >
                <div
                  style={{
                    marginTop: "0.5vw",
                    marginLeft: "0.5vw",
                    position: "absolute",
                  }}
                >
                  <h4 className="modal-win-title">Observacion del Sistema</h4>
                  <h6 className="modal-win-title" style={{ marginTop: "1vw" }}>
                    !- El Paciente es alergico a: bla bla vbla vla
                  </h6>
                  <h6 className="modal-win-title">
                    !- Este paciente frecuentemente es diagnosticado con:
                  </h6>
                  <h6 className="modal-win-title">
                    !- Los signos de este paciente suelen ser: FR - Estatus, FC
                    - Estatus, Presión A. - Estatus
                  </h6>
                  <h6 className="modal-win-title">
                    !- Los medicamentos recetados a este paciente la última vez
                    fueron: bla, bla, bla, paracetamol, ibuprofeno, vitamina b,
                    salbutamol, etcetera
                  </h6>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{
                    position: "absolute",
                    marginTop: "11vw",
                    marginLeft: "57vw",
                    backgroundColor: "#64AFBF",
                    border: "0",
                    color: "white",
                    padding: "0.5vw 1.3vw",
                    borderRadius: "0.3vw",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Ver Mas
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                class="btn btn-success"
                data-bs-target="#modalPaciente2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>

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
                />
                <InputLabel
                  text="Sintomas de iniciación"
                  holder="Ingrese los Sintomas de Iniciacion del Paciente"
                  ancho={30}
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
                  text="Laboratorios"
                  holder="Ingrese Laboratorios Previos"
                  ancho={15}
                />
                <InputLabel
                  text="Estudios Previos"
                  holder="Ingrese los Estudios Previos"
                  ancho={15}
                />
                <InputLabel
                  text="Terapeutica Anteriormente"
                  holder="Ingrese Terapias Empleadas Anteriormente"
                  ancho={15}
                />
              </div>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel text="A. Digestivos" holder="Ingrese" ancho={20} />
                <InputLabel
                  text="A. Respiratorio"
                  holder="Ingrese"
                  ancho={20}
                />
                <InputLabel text="A. Urinario" holder="Ingrese" ancho={20} />
              </div>
              <div
                style={{
                  marginTop: "1vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel text="Genitales" holder="Ingrese" ancho={20} />
                <InputLabel
                  text="S. Cardio Vascular"
                  holder="Ingrese"
                  ancho={20}
                />
                <InputLabel text="S. Nervioso" holder="Ingrese" ancho={20} />
              </div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-danger"
                data-bs-target="#modalPaciente"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Regresar
              </button>
              <button
                class="btn btn-success"
                data-bs-target="#modalPaciente3"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="modalPaciente3"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content  modal-window-content">
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
                <InputLabel text="S. Endocrino" holder="Ingrese" ancho={20} />
                <InputLabel text="S. Locomotor" holder="Ingrese" ancho={20} />
                <InputLabel
                  text="Sintomas Generales"
                  holder="Ingrese"
                  ancho={20}
                />
              </div>
              <div
                style={{
                  marginTop: "0vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel
                  text="Inspreccion General"
                  holder="Ingrese"
                  ancho={65}
                />
              </div>
              <div
                style={{
                  marginTop: "0vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel text="Cabeza" holder="Ingrese" ancho={30} />
                <InputLabel text="Torax" holder="Ingrese" ancho={30} />
              </div>
              <div
                style={{
                  marginTop: "1vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel text="Abdomen" holder="Ingrese" ancho={30} />
                <InputLabel text="Genitales" holder="Ingrese" ancho={30} />
              </div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-danger"
                data-bs-target="#modalPaciente2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Regresar
              </button>
              <button
                class="btn btn-success"
                data-bs-target="#modalPaciente4"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="modalPaciente4"
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
                  text="Extremidades Pelvicas"
                  holder="Ingrese"
                  ancho={30}
                />
                <InputLabel
                  text="Extremidades Toraxicas"
                  holder="Ingrese"
                  ancho={30}
                />
              </div>
              <div>
                <InputLabel text="Diagnostico" holder="Ingrese" ancho={65} />
              </div>
              <div>
                <InputLabel text="Plan" holder="Ingrese" ancho={65} />
              </div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-danger"
                data-bs-target="#modalPaciente3"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Regresar
              </button>
              <button
                class="btn btn-success"
                data-bs-target=""
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Registrar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="modalEliminar"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content modal-window-content">
            <div class="modal-body">
              <PacientSearch
                title="Ficha de Eliminar Paciente"
                text="Ingrese los datos para hacer una busqueda y seleccione la acción."
                ancho={65}
                labelAncho={30}
                color="#BE2C35"
                botonText="Eliminar"
                anchoPicker="27"
                mover={3}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-primary">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalModificar"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content modal-window-content">
            <div className="modal-body">
              <PacientSearch
                title="Modificar Paciente"
                text="Ingrese los datos para hacer una busqueda y seleccione la acción."
                ancho={65}
                labelAncho={30}
                color="#248087"
                botonText="Modificar"
                anchoPicker="27"
                mover={3}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

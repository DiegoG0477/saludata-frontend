import InputLabel from "../atoms/InputLabel";
import "../../styles/atoms.css";
import NextButton from "../atoms/NextButton";

export default function RegistrarConsultaTwo() {
  return (
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
              <InputLabel text="PA(Presion Arterial)" holder="0/0" ancho={7} />
              <InputLabel text="Otro(Opcional)" holder="Opcional" ancho={16} />
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
                  !- Los signos de este paciente suelen ser: FR - Estatus, FC -
                  Estatus, Presión A. - Estatus
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
              class="btn globalButton-red"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <NextButton page="#modalPaciente2"/>
          </div>
        </div>
      </div>
    </div>
  );
}

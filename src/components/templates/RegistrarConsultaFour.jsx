import InputLabel from "../atoms/InputLabel";
import NextButton from "../atoms/NextButton";
import ReturnButton from "../atoms/ReturnButton";

export default function RegistrarConsultaFour() {
  return (
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
            <ReturnButton page="#modalPaciente2" />
            <NextButton page="#modalPaciente4" />
          </div>
        </div>
      </div>
    </div>
  );
}

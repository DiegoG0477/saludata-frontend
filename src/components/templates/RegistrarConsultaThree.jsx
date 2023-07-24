import InputLabel from "../atoms/InputLabel";
import NextButton from "../atoms/NextButton";
import ReturnButton from "../atoms/ReturnButton";

export default function RegistrarConsultaThree() {
  return (
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
              <InputLabel text="A. Respiratorio" holder="Ingrese" ancho={20} />
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
            <ReturnButton page="#modalPaciente"></ReturnButton>
            <NextButton page="#modalPaciente3"></NextButton>
          </div>
        </div>
      </div>
    </div>
  );
}

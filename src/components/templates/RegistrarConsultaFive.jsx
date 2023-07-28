import InputLabel from "../atoms/InputLabel";
import ReturnButton from "../atoms/ReturnButton";

export default function RegistrarConsultaFive() {
  return (
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
            <ReturnButton page="#modalPaciente3"/>
            <button
                type="button"
                class="btn"
                style={{fontSize: "1.1rem", fontWeight: "bolder", color:"aliceblue", background:"#268D56", borderWidth:"0px", borderRadius:"10px", height:"40px", boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}
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
  );
}

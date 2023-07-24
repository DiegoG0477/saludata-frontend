import InputLabel from "../atoms/InputLabel";
import DatePick from "../atoms/DatePick";

export default function GinecologicosModalW() {
  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop4"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content modal-window-content">
            <div class="modal-body">
              <h4 className="modal-win-title">Ficha de identificacion</h4>
              <h6 className="modal-win-title">
                Por favor, ingrese los datos pertinentes del nuevo paciente
              </h6>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel text="G" holder="0" ancho={5} />
                <InputLabel text="P" holder="0" ancho={5} />
                <InputLabel text="A" holder="0" ancho={5} />
                <InputLabel text="C" holder="0" ancho={5} />
                <InputLabel text="Menarca" holder="0 Años" ancho={10} />
                <InputLabel
                  text="Ciclos Mestruales"
                  holder="0 Dias"
                  ancho={10}
                />
                <InputLabel text="IVSA" holder="0 Años" ancho={8} />
              </div>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                  marginLeft: "1vw",
                }}
              >
                <div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold" }}
                    >
                      MPF
                    </label>
                  </div>
                  <div>
                    <div class="form-check" style={{ marginTop: "2vw" }}>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        SI
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        NO
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold" }}
                    >
                      Deteccion Oportuna de CA mama
                    </label>
                  </div>
                  <div class="form-check" style={{ marginTop: "2vw" }}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault12"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      SI
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      NO
                    </label>
                  </div>
                </div>
                <div className="input-box">
                  <p
                    // htmlFor="birthdate"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    FUM
                  </p>
                  <div
                    className="input-search-container"
                    style={{ height: "8vh" }}
                  >
                    <DatePick />
                  </div>
                </div>
                <div>
                  <InputLabel text="Papaniculau" holder="0" ancho={5} />
                </div>
              </div>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel
                  text="Antecedentes Perinatales"
                  holder="Ingrese los Antecedentes Perinatales del Paciente"
                  ancho={65}
                />
              </div>
            </div>
            <div class="modal-footer modal-buttons-section">
              <button
                class="btn btn-danger"
                data-bs-target="#staticBackdrop3"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Regresar
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-target=""
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Agregar Paciente
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

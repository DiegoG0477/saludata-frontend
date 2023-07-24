import InputLabel from "../atoms/InputLabel";

export default function PatologicosModalW(){
    return(
        <>
        
      <div
        class="modal fade"
        id="staticBackdrop3"
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
                <InputLabel
                  text="Alergias"
                  holder="Ingrese las Alergias"
                  ancho={65}
                />
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
                  text="Enfermedades Cronicas"
                  holder="Ingrese las Enfermedades Cronicas"
                  ancho={20}
                />
                <InputLabel
                  text="Traumatismo"
                  holder="Ingrese los Traumatismos"
                  ancho={20}
                />
                <InputLabel text="Cirujias" holder="0" ancho={5} />
                <InputLabel text="Hospitalizaciones" holder="0" ancho={5} />
              </div>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "25vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel text="Covid-19" holder="0" ancho={5} />
                <div>
                  <div class="dropdown" style={{ marginTop: "2.5vw" }}>
                    <button
                      class="btn btn-success btn-lg dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Tipo de sangre
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          O+
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          O-
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          A+
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          A-
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          B+
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          B-
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          AB+
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          AB-
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer modal-buttons-section">
              <button
                class="btn btn-danger"
                data-bs-target="#staticBackdrop2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Regresar
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-target="#staticBackdrop4"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}
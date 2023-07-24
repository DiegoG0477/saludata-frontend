import InputLabel from "../atoms/InputLabel";

export default function AntecedentesModalW() {
  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop2"
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
                  marginTop: "2vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel
                  text="Heredos Familiares"
                  holder="Ingrese los Heredos Familiares del Paciente"
                  ancho={70}
                />
              </div>
              <div
                style={{
                  marginTop: "0vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "70vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel
                  text="Originario"
                  holder="Ingrese Donde Nacio el Paciente"
                  ancho={15}
                />
                <InputLabel
                  text="Residente"
                  holder="Ingrese Donde vive Actualmente"
                  ancho={15}
                />
                <InputLabel
                  text="Lengua Indegena"
                  holder="Ingrese la Legua Indigena"
                  ancho={15}
                />
                <InputLabel
                  text="Habita en Casa"
                  holder="Ingrese el Habita de Casa"
                  ancho={15}
                />
              </div>
              <div
                style={{
                  marginTop: "1vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "70vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel text="No. Habitants" holder="0" ancho={5} />
                <InputLabel text="No. Cuartos" holder="0" ancho={5} />
                <InputLabel
                  text="Construida"
                  holder="Ingrese el Tipo de Material"
                  ancho={13}
                />

                <div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Agua Potable
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Luz
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Drenaje
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Cocina con Leña
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Zoonosis
                    </label>
                  </div>
                </div>
                <InputLabel
                  text="Escolaridad"
                  holder="Ingrese la Escolaridad"
                  ancho={14}
                />
                <InputLabel
                  text="Religion"
                  holder="Ingrese la Religion"
                  ancho={10}
                />
              </div>
              <div
                style={{
                  marginTop: "1vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel
                  text="Ocupacion"
                  holder="Ingrese la Ocupacion"
                  ancho={12}
                />
                <InputLabel text="Comidas Diarias" holder="0" ancho={5} />
                <InputLabel text="Ingesta de agua" holder="0 L" ancho={5} />

                <div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold" }}
                    >
                      Acepta Transfusion
                    </label>
                  </div>
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
                <div class="dropdown" style={{ marginTop: "2vw" }}>
                  <button
                    class="btn btn-success btn-lg dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Estado Civil
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Casado/a
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Soltero/a
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Viudo/a
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Divorciado
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Separado
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Concubinato
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="modal-footer modal-buttons-section">
              <button
                class="btn btn-danger"
                data-bs-target="#staticBackdrop"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Regresar
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-target="#staticBackdrop3"
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

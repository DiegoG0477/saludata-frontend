import InputLabel from "../atoms/InputLabel";
import DatePick from "../atoms/DatePick";
import "../../styles/atoms.css";
import "../../styles/organisms.css";

export default function FichaIdPacienteR() {
  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop"
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
                }}
              >
                <InputLabel
                  text="Nombre(s) del Paciente"
                  holder="Ingrese el nombre(s) del paciente"
                  ancho={20}
                />
                <InputLabel
                  text="Apellidos Paterno"
                  holder="Ingrese los apellidos del paciente"
                  ancho={20}
                />
                <InputLabel
                  text="Apellidos Materno"
                  holder="Ingrese los apellidos del paciente"
                  ancho={20}
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
                <InputLabel text="Calle" holder="Ingrese la Calle" ancho={15} />
                <InputLabel
                  text="Colonia"
                  holder="Ingrese la Colonia"
                  ancho={15}
                />
                <InputLabel
                  text="Codigo Postal"
                  holder="Ingrese el Codigo Postal"
                  ancho={15}
                />
                <InputLabel
                  text="Numero de Casa"
                  holder="Ingrese el Numero de Casa"
                  ancho={15}
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
                  text="Numero de Telefono"
                  holder="Ingrese el Numero de Telefono"
                  ancho={18}
                />
                <div className="input-box">
                  <p
                    // htmlFor="birthdate"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Fecha de Nacimiento del Paciente
                  </p>
                  <div
                    className="input-search-container"
                    style={{ height: "8vh" }}
                  >
                    <DatePick />
                  </div>
                </div>
                <InputLabel
                  text="Religion"
                  holder="Ingrese la Religion"
                  ancho={12}
                />
                <div
                  style={{
                    marginTop: "35px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "5.9vw",
                  }}
                >
                  <div>
                    <div class="dropdown">
                      <button
                        class="btn collapse-button dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sexo
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Masculio
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Femenino
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer modal-buttons-section">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-target="#staticBackdrop2"
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

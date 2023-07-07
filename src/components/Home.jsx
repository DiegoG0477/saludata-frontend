import React from "react";
import "../App.css";
import Card from "./Card";
import deletePacient from "../assets/delete-pacient.png";
import addPacient from "../assets/pacient.png";
import consulta from "../assets/consulta.png";
import edit from "../assets/edit-pacient.png";
import SaveIcon from "@mui/icons-material/Save";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DatePicker } from "@mui/x-date-pickers";

function Home() {
  return (
    <>
      <div className="system-content">
        <div className="home-top">
          <Card
            title="Añadir un Paciente"
            img={addPacient}
            buttonText={"Añadir"}
            icon={
              <SaveIcon
                style={{ fontSize: "1.4rem", marginTop: "-5px" }}
              ></SaveIcon>
            }
          ></Card>
          <Card
            title="Registrar Consulta"
            img={consulta}
            buttonText={"Registrar"}
            icon={
              <BookmarkAddIcon
                style={{ fontSize: "1.4rem", marginTop: "-5px" }}
              ></BookmarkAddIcon>
            }
          ></Card>
          <Card
            title="Eliminar Paciente"
            img={deletePacient}
            buttonText={"Eliminar"}
            icon={
              <DeleteIcon
                style={{ fontSize: "1.4rem", marginTop: "-5px" }}
              ></DeleteIcon>
            }
          ></Card>
        </div>
        <div className="home-top" style={{ paddingTop: "12px" }}>
          <Card
            title="Modificar un Paciente"
            img={edit}
            buttonText={"Modificar"}
            icon={
              <EditIcon
                style={{ fontSize: "1.4rem", marginTop: "-5px" }}
              ></EditIcon>
            }
          ></Card>
        </div>

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
              {/* <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Agregar Paciente
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div> */}
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
                    marginLeft: "3vw",
                  }}
                >
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Nombre(s) del Paciente
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese el nombre(s) del paciente"
                      style={{ width: "20vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-lastnames"
                      className="form-label"
                      style={{ fontWeight: "bold" }}
                    >
                      Apellidos Paterno
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-lastnames"
                      placeholder="Ingrese los apellidos del paciente"
                      style={{ width: "20vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-lastnames"
                      className="form-label"
                      style={{ fontWeight: "bold" }}
                    >
                      Apellidos Materno
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-lastnames"
                      placeholder="Ingrese los apellidos del paciente"
                      style={{ width: "20vw", height: "8vh" }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "1vh",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "65vw",
                    marginLeft: "3vw",
                  }}
                >
                  <div className="input-box">
                    <label
                      for="pacient-lastnames"
                      className="form-label"
                      style={{ fontWeight: "bold" }}
                    >
                      Calle
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-lastnames"
                      placeholder="Ingrese la Calle"
                      style={{ width: "15vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-lastnames"
                      className="form-label"
                      style={{ fontWeight: "bold" }}
                    >
                      Colonia
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-lastnames"
                      placeholder="Ingrese la Colonia"
                      style={{ width: "15vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-lastnames"
                      className="form-label"
                      style={{ fontWeight: "bold" }}
                    >
                      Codigo Postal
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-lastnames"
                      placeholder="Ingrese el Codigo postal"
                      style={{ width: "15vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-lastnames"
                      className="form-label"
                      style={{ fontWeight: "bold" }}
                    >
                      Numero de Casa
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-lastnames"
                      placeholder="Ingrese el Numero de Casa"
                      style={{ width: "15vw", height: "8vh" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "1vh",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "65vw",
                    marginLeft: "3vw",
                  }}
                >
                  <div className="input-box">
                    <label
                      for="pacient-lastnames"
                      className="form-label"
                      style={{ fontWeight: "bold" }}
                    >
                      Numero de Telefono
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-lastnames"
                      placeholder="Ingrese el Numero de Telefono"
                      style={{ width: "18vw", height: "8vh" }}
                    />
                  </div>
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
                      <DatePicker />
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "35px",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "20vw",
                    }}
                  >
                    <div>
                      <div class="dropdown" >
                        <button
                          class="btn btn-success btn-lg dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Religion
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div class="dropdown">
                        <button
                          class="btn btn-success btn-lg dropdown-toggle"
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
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button type="button" class="btn btn-success">
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

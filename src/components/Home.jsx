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
            num={1}
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
            num={2}
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

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                    width: "65vw"
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
                      style={{ width: "15vw", height: "8vh" }}
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
                      style={{ width: "15vw", height: "8vh" }}
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
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success" data-bs-target="#staticBackdrop2" data-bs-toggle="modal" data-bs-dismiss="modal">Siguiente</button>
              </div>
            </div>
          </div>
        </div>

<div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Heredos Familiares
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese los Heredos Familiares del Paciente"
                      style={{ width: "70vw", height: "8vh" }}
                    />
                  </div>
                </div>
                <div
                style={{
                  marginTop: "0vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "70vw",
                  marginLeft: "1vw",
                }}>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Originario
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese Donde Nacio el Paciente"
                      style={{ width: "15vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Residente
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese en Donde Vive Actualmente el Paciente"
                      style={{ width: "15vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Lengua Indigena
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese la Lengua Indigena"
                      style={{ width: "15vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Habita en casa
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese el Habita de casa"
                      style={{ width: "15vw", height: "8vh" }}
                    />
                  </div>
                </div>
                <div
                style={{
                  marginTop: "1vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "70vw",
                  marginLeft: "1vw"
                }}>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      No.Habitantes
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0"
                      style={{ width: "5vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      No.Cuartos
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0"
                      style={{ width: "5vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Construida
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese el Tipo de Material"
                      style={{ width: "13vw", height: "8vh" }}
                    />
                  </div>
                  <div>
                  <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                          Agua Potable
                        </label>
                      </div>
                      <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                          Luz 
                        </label>
                      </div>
                      <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                          Drenaje
                        </label>
                      </div>
                      <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                          Cocina con Leña 
                        </label>
                      </div>
                      <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                          Zoonosis 
                        </label>
                      </div>
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Escolaridad
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese la Escolaridad"
                      style={{ width: "14vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Religion
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese la Religion"
                      style={{ width: "10vw", height: "8vh" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "1vh",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "65vw",
                    marginLeft: "1vw",
                  }}>
                    <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Ocupacion
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese la Ocupación"
                      style={{ width: "12vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Comidas Diarias
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0"
                      style={{ width: "5vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Ingesta de Agua
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0 L"
                      style={{ width: "5vw", height: "8vh" }}
                    />
                  </div>
                  <div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Acepta Transfusion
                    </label>
                  </div>
                  <div class="form-check" style={{marginTop:"2vw"}}>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                          SI
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                          NO
                        </label>
                      </div>
                  </div>
                  <div class="dropdown" style={{marginTop:"2vw"}}>
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
            <button class="btn btn-danger" data-bs-target="#staticBackdrop" data-bs-toggle="modal" data-bs-dismiss="modal">Regresar</button>
            <button type="button" class="btn btn-success" data-bs-target="#staticBackdrop3" data-bs-toggle="modal" data-bs-dismiss="modal">Siguiente</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
            }}>
              <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Alergias
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese las Alergias"
                      style={{ width: "65vw", height: "8vh" }}
                    />
                  </div>
            </div>
            <div
             style={{
              marginTop: "3vh",
              display: "flex",
              justifyContent: "space-between",
              width: "65vw",
              marginLeft: "1vw",
            }}>
              <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Enfermedades Cronicas
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese las Enfermedades Cronicas"
                      style={{ width: "20vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      Traumatismo
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese los Traumatismos"
                      style={{ width: "20vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Cirujias
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0"
                      style={{ width: "5vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Hospitalizaciones
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0"
                      style={{ width: "5vw", height: "8vh" }}
                    />
                  </div>
                  
            </div>
            <div style={{
              marginTop: "3vh",
              display: "flex",
              justifyContent: "space-between",
              width: "25vw",
              marginLeft: "1vw",
            }}>
              <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Covid-19
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0"
                      style={{ width: "5vw", height: "8vh" }}
                    />
                  </div>
                  <div>
                      <div class="dropdown" style={{marginTop:"2.5vw"}}>
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
            <button class="btn btn-danger" data-bs-target="#staticBackdrop2" data-bs-toggle="modal" data-bs-dismiss="modal">Regresar</button>
            <button type="button" class="btn btn-success" data-bs-target="#staticBackdrop4" data-bs-toggle="modal" data-bs-dismiss="modal">Siguiente</button>
          </div>
        </div>
      </div>
    </div>

      <div class="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
        }}>
          <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    G
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0"
                      style={{ width: "5vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    P
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0"
                      style={{ width: "5vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    A
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0"
                      style={{ width: "5vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    C
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0"
                      style={{ width: "5vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Menarca
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0 Años"
                      style={{ width: "10vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Ciclos Mestruales
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0 Dias"
                      style={{ width: "10vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    IVSA
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0 Años"
                      style={{ width: "8vw", height: "8vh" }}
                    />
                  </div>
                  
              </div>
                  <div 
                  style={{
                    marginTop: "3vh",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "65vw",
                    marginLeft: "1vw",
                  }}>
                    <div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                      MPF
                    </label>
                  </div>
                  <div>
                  <div class="form-check" style={{marginTop:"2vw"}}>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                          SI
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
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
                      style={{ fontWeight: "bold"}}
                    >
                      Deteccion Oportuna de CA mama
                    </label>
                  </div>
                  <div class="form-check" style={{marginTop:"2vw"}}>
                        <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault12"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                          SI
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1"/>
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
                      <DatePicker />
                    </div>
                  </div>
                  <div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Papaniculau
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0"
                      style={{ width: "5vw", height: "8vh" }}
                    />
                  </div>
                  </div>
                  </div>
                  <div
                  style={{
                    marginTop: "3vh",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "65vw",
                    marginLeft: "1vw",
                  }}>
                    <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Antecedentes Perinatales
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese los Antecedentes Perinatales del Paciente"
                      style={{ width: "65vw", height: "8vh" }}
                    />
                  </div>
                  </div>
        </div>
        <div class="modal-footer modal-buttons-section">
          <button class="btn btn-danger" data-bs-target="#staticBackdrop3" data-bs-toggle="modal" data-bs-dismiss="modal">Regresar</button>
          <button type="button" class="btn btn-success" data-bs-target="" data-bs-toggle="modal" data-bs-dismiss="modal">Agregar Paciente</button>
        </div>
      </div>
    </div>
  </div>
          <div class="modal fade" id="modalPaciente" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                  width: "65vw"
                }}>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Altura
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese la Altura en CM"
                      style={{ width: "11vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Peso
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese el Peso en KG"
                      style={{ width: "10vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Peso Prenatal
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese el Peso en KG"
                      style={{ width: "10vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Talla
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese la Talla"
                      style={{ width: "10vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Temperatura
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Celsius"
                      style={{ width: "10vw", height: "8vh" }}
                    />
                  </div>
                  
                </div>
                
                  <div
                  style={{
                    marginTop: "3vh",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "65vw",
                  }}>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    FC(Frecuencia Cardiaca)
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0/0"
                      style={{ width: "7vw", height: "8vh" }}
                    />
                    
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    FR(Frecuencia Respiratoria)
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0/0"
                      style={{ width: "7vw", height: "8vh" }}
                    />
                    
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    PA(Presion Arterial)
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="0/0"
                      style={{ width: "7vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Otro(Opcional)
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Opcional"
                      style={{ width: "16vw", height: "8vh" }}
                    />
                  </div>
                  </div>
                  <div style={{backgroundColor:"#D9D9D9",width:"65vw",height:"10vw",marginTop:"2vw",borderRadius:"0.5vw"}}>
                  <div style={{marginTop:"0.5vw",marginLeft:"0.5vw",position:"absolute"}}>
                  <h4 className="modal-win-title">Observacion del Sistema</h4>
                      <h6 className="modal-win-title" style={{marginTop:"1vw"}}>
                        !- El Paciente es alergico a: bla bla vbla vla
                      </h6>
                      <h6 className="modal-win-title">
                        !- Este paciente frecuentemente es diagnosticado con: 
                      </h6>
                      <h6 className="modal-win-title">
                        !- Los signos de este paciente suelen ser: FR - Estatus, FC - Estatus, Presión A. - Estatus 
                      </h6>
                      <h6 className="modal-win-title">
                        !-  Los medicamentos recetados a este paciente la última vez fueron: bla, bla, bla, paracetamol, ibuprofeno, vitamina b,  salbutamol, etcetera
                      </h6>
                      
                  </div>
                  <button type="button"  class="btn btn-primary" style={{position:"absolute",marginTop:"7vw",marginLeft:"58vw",backgroundColor:"#64AFBF",border:"0",color:"white",padding:"0.5vw 1.3vw", borderRadius:"0.3vw",boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>Ver Mas</button>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                  <button class="btn btn-success" data-bs-target="#modalPaciente2" data-bs-toggle="modal" data-bs-dismiss="modal">Siguiente</button>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="modalPaciente2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                    }}>
                      <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Motivo de la consulta
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese el Motivo de la Consulta"
                      style={{ width: "30vw", height: "8vh" }}
                    />
                  </div>
                      <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Sintomas de Iniciacion
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese Sintomas de Iniciacion del Paciente"
                      style={{ width: "30vw", height: "8vh" }}
                    />
                  </div>
                    </div>
                    <div style={{
                      marginTop: "3vh",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "65vw",
                    }}>
                      <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Laboratorios
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese Laboratorios Previos"
                      style={{ width: "15vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Estudios Previos
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese los Estudios Previos"
                      style={{ width: "15vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Laboratorios
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese Laboratorios Previos"
                      style={{ width: "15vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    Terapeutica Empleada Anteriormente
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese Terapias Empleadas Anteriormente"
                      style={{ width: "15vw", height: "8vh" }}
                    />
                  </div>
                    </div>
                    <div
                    style={{
                      marginTop: "3vh",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "65vw",
                    }}>
                      <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    A. Digestivos
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese Laboratorios Previos"
                      style={{ width: "30vw", height: "8vh" }}
                    />
                  </div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold"}}
                    >
                    A. Respiratorio
                    </label>
                    <input
                      type="text"
                      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                      id="pacients-names"
                      placeholder="Ingrese los Estudios Previos"
                      style={{ width: "30vw", height: "8vh" }}
                    />
                  </div>
                  
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-danger" data-bs-target="#modalPaciente" data-bs-toggle="modal" data-bs-dismiss="modal">Regresar</button>
                    <button type="button" class="btn btn-success">Siguiente</button>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  );
}

export default Home;

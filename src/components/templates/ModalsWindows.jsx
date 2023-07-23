import InputLabel from "../atoms/InputLabel";
import DatePick from "../atoms/DatePick";
import "../../styles/organisms.css";
import PacientSearch from "../PacientSearch";

export default function ModalsWindows() {
  return(
    <>
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
                    width: "65vw",
                  }}
                >
                  <InputLabel text="Nombre(s) del Paciente" holder="Ingrese el nombre(s) del paciente" ancho={20}/>
                  <InputLabel text="Apellidos Paterno" holder="Ingrese los apellidos del paciente" ancho={20}/>
                  <InputLabel text="Apellidos Materno" holder="Ingrese los apellidos del paciente" ancho={20}/>
                </div>

                <div
                  style={{
                    marginTop: "1vh",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "65vw",
                  }}
                >
                  <InputLabel text="Calle" holder="Ingrese la Calle" ancho={15}/>
                  <InputLabel text="Colonia" holder="Ingrese la Colonia" ancho={15}/>
                  <InputLabel text="Codigo Postal" holder="Ingrese el Codigo Postal" ancho={15}/>
                  <InputLabel text="Numero de Casa" holder="Ingrese el Numero de Casa" ancho={15}/>
                  
                </div>
                <div
                  style={{
                    marginTop: "1vh",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "65vw",
                    
                  }}
                >
                  <InputLabel text="Numero de Telefono" holder="Ingrese el Numero de Telefono" ancho={18}/>
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
                  <InputLabel text="Religion" holder="Ingrese la Religion" ancho={12}/>
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
                  <InputLabel text="Heredos Familiares" holder="Ingrese los Heredos Familiares del Paciente" ancho={70}/>
                </div>
                <div
                style={{
                  marginTop: "0vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "70vw",
                  marginLeft: "1vw",
                }}>
                  <InputLabel text="Originario" holder="Ingrese Donde Nacio el Paciente" ancho={15}/>
                  <InputLabel text="Residente" holder="Ingrese Donde vive Actualmente" ancho={15}/>
                  <InputLabel text="Lengua Indegena" holder="Ingrese la Legua Indigena" ancho={15}/>
                  <InputLabel text="Habita en Casa" holder="Ingrese el Habita de Casa" ancho={15}/>
                </div>
                <div
                style={{
                  marginTop: "1vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "70vw",
                  marginLeft: "1vw"
                }}>
                  <InputLabel text="No. Habitants" holder="0" ancho={5}/>
                  <InputLabel text="No. Cuartos" holder="0" ancho={5}/>
                  <InputLabel text="Construida" holder="Ingrese el Tipo de Material" ancho={13}/>
                  
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
                  <InputLabel text="Escolaridad" holder="Ingrese la Escolaridad" ancho={14}/>
                  <InputLabel text="Religion" holder="Ingrese la Religion" ancho={10}/>
                </div>
                <div
                  style={{
                    marginTop: "1vh",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "65vw",
                    marginLeft: "1vw",
                  }}>
                    <InputLabel text="Ocupacion" holder="Ingrese la Ocupacion" ancho={12}/>
                    <InputLabel text="Comidas Diarias" holder="0" ancho={5}/>
                    <InputLabel text="Ingesta de agua" holder="0 L" ancho={5}/>
                    
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
              <InputLabel text="Alergias" holder="Ingrese las Alergias" ancho={65}/>
              
            </div>
            <div
             style={{
              marginTop: "3vh",
              display: "flex",
              justifyContent: "space-between",
              width: "65vw",
              marginLeft: "1vw",
            }}>
              <InputLabel text="Enfermedades Cronicas" holder="Ingrese las Enfermedades Cronicas" ancho={20}/>
              <InputLabel text="Traumatismo" holder="Ingrese los Traumatismos" ancho={20}/>
              <InputLabel text="Cirujias" holder="0" ancho={5}/>
              <InputLabel text="Hospitalizaciones" holder="0" ancho={5}/>    
            </div>
            <div style={{
              marginTop: "3vh",
              display: "flex",
              justifyContent: "space-between",
              width: "25vw",
              marginLeft: "1vw",
            }}>
              <InputLabel text="Covid-19" holder="0" ancho={5}/>
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
          <InputLabel text="G" holder="0" ancho={5}/>
          <InputLabel text="P" holder="0" ancho={5}/>
          <InputLabel text="A" holder="0" ancho={5}/>
          <InputLabel text="C" holder="0" ancho={5}/>
          <InputLabel text="Menarca" holder="0 Años" ancho={10}/>
          <InputLabel text="Ciclos Mestruales" holder="0 Dias" ancho={10}/>
          <InputLabel text="IVSA" holder="0 Años" ancho={8}/>        
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
                      <DatePick />
                    </div>
                  </div>
                  <div>
                  <InputLabel text="Papaniculau" holder="0" ancho={5}/>
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
                    <InputLabel text="Antecedentes Perinatales" holder="Ingrese los Antecedentes Perinatales del Paciente" ancho={65}/>
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
                  <InputLabel text="Altura" holder="Ingrese la Altura en CM" ancho={13}/>
                  <InputLabel text="Peso" holder="Ingrese el Peso en KG" ancho={13}/>
                  <InputLabel text="Peso Prenatal" holder="Ingrese el Peso en KG" ancho={13}/>
                  <InputLabel text="Talla" holder="Ingrese la Talla" ancho={10}/>
                  <InputLabel text="Temperatura" holder="Celsius" ancho={10}/>
                </div>
                  <div
                  style={{
                    marginTop: "3vh",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "65vw",
                  }}>
                    <InputLabel text="FC(Fracuencia Cardiaca)" holder="0/0" ancho={7}/>
                    <InputLabel text="FR(Frecuencia Respiratoria)" holder="0/0" ancho={7}/>
                    <InputLabel text="PA(Presion Arterial)" holder="0/0" ancho={7}/>
                    <InputLabel text="Otro(Opcional)" holder="Opcional" ancho={16}/>
                  </div>
                  <div style={{backgroundColor:"#D9D9D9",width:"65vw",height:"14vw",marginTop:"2vw",borderRadius:"0.5vw"}}>
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
                  <button type="button"  class="btn btn-primary" style={{position:"absolute",marginTop:"11vw",marginLeft:"57vw",backgroundColor:"#64AFBF",border:"0",color:"white",padding:"0.5vw 1.3vw", borderRadius:"0.3vw",boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>Ver Mas</button>
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
                      <InputLabel text="Motivo de la Consulta" holder="Ingrese el Motivo de la Consulta" ancho={30}/>
                      <InputLabel text="Sintomas de iniciación" holder="Ingrese los Sintomas de Iniciacion del Paciente" ancho={30}/>
                    </div>
                    <div style={{
                      marginTop: "1vh",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "65vw",
                    }}>
                      <InputLabel text="Laboratorios" holder="Ingrese Laboratorios Previos" ancho={15}/>
                      <InputLabel text="Estudios Previos" holder="Ingrese los Estudios Previos" ancho={15}/>
                      <InputLabel text="Terapeutica Anteriormente" holder="Ingrese Terapias Empleadas Anteriormente" ancho={15}/>
                    </div>
                    <div
                    style={{
                      marginTop: "3vh",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "65vw",
                    }}>
                      <InputLabel text="A. Digestivos" holder="Ingrese" ancho={20}/>
                      <InputLabel text="A. Respiratorio" holder="Ingrese" ancho={20}/>
                      <InputLabel text="A. Urinario" holder="Ingrese" ancho={20}/>
                    </div>
                    <div
                    style={{
                      marginTop: "1vh",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "65vw",
                    }}>
                      <InputLabel text="Genitales" holder="Ingrese" ancho={20}/>
                      <InputLabel text="S. Cardio Vascular" holder="Ingrese" ancho={20}/>
                      <InputLabel text="S. Nervioso" holder="Ingrese" ancho={20}/>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-danger" data-bs-target="#modalPaciente" data-bs-toggle="modal" data-bs-dismiss="modal">Regresar</button>
                    <button class="btn btn-success" data-bs-target="#modalPaciente3" data-bs-toggle="modal" data-bs-dismiss="modal">Siguiente</button>
                  </div>
                </div>
              </div>
        </div>

        <div class="modal fade" id="modalPaciente3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                    }}>
                      <InputLabel text="S. Endocrino" holder="Ingrese" ancho={20}/>
                      <InputLabel text="S. Locomotor" holder="Ingrese" ancho={20}/>
                      <InputLabel text="Sintomas Generales" holder="Ingrese" ancho={20}/>
                    </div>
                    <div 
                    style={{
                      marginTop: "0vh",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "65vw",
                    }}>
                      <InputLabel text="Inspreccion General" holder="Ingrese" ancho={65}/>
                    </div>
                    <div 
                    style={{
                      marginTop: "0vh",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "65vw",
                    }}>
                      <InputLabel text="Cabeza" holder="Ingrese" ancho={30}/>
                      <InputLabel text="Torax" holder="Ingrese" ancho={30}/>
                    </div>
                    <div 
                    style={{
                      marginTop: "1vh",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "65vw",
                    }}>
                      <InputLabel text="Abdomen" holder="Ingrese" ancho={30}/>
                      <InputLabel text="Genitales" holder="Ingrese" ancho={30}/>
                    </div>
                    </div>
                    <div class="modal-footer">
                      <button class="btn btn-danger" data-bs-target="#modalPaciente2" data-bs-toggle="modal" data-bs-dismiss="modal">Regresar</button>
                      <button class="btn btn-success" data-bs-target="#modalPaciente4" data-bs-toggle="modal" data-bs-dismiss="modal">Siguiente</button>
                    </div>
                  </div>
                </div>
        </div>

        <div class="modal fade" id="modalPaciente4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                      <InputLabel text="Extremidades Pelvicas" holder="Ingrese" ancho={30}/>
                      <InputLabel text="Extremidades Toraxicas" holder="Ingrese" ancho={30}/>
                    </div>
                    <div>
                      <InputLabel text="Diagnostico" holder="Ingrese" ancho={65}/>
                    </div>
                    <div>
                      <InputLabel text="Plan" holder="Ingrese" ancho={65}/>
                    </div>
                      </div>
                      <div class="modal-footer">
                        <button class="btn btn-danger" data-bs-target="#modalPaciente3" data-bs-toggle="modal" data-bs-dismiss="modal">Regresar</button>
                        <button class="btn btn-success" data-bs-target="" data-bs-toggle="modal" data-bs-dismiss="modal">Registrar Consulta</button>
                      </div>
                    </div>
                  </div>
        </div>

        <div class="modal fade" id="modalEliminar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content modal-window-content">
                  <div class="modal-body">
                    <PacientSearch
                    title="Ficha de Eliminar Paciente"
                    text="Ingrese los datos para hacer una busqueda y seleccione la acción."
                    ancho={65}
                    labelAncho={30}
                    color="#BE2C35"
                    botonText="Eliminar"
                    anchoPicker="27"
                    mover={3}
                    />
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Aceptar</button>
                  </div>
                </div>
              </div>
          </div>
    </>
  );
}
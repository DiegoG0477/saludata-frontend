import InputLabel from "../atoms/InputLabel";
import { useState } from "react";
import "../../styles/atoms.css";
import NextButton from "../atoms/NextButton";
import ReturnButton from "../atoms/ReturnButton";

export default function PatologicosModalW() {
  const [selectedOption, setSelectedOption] = useState("Tipo de Sangre");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
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
              <h4 className="modal-win-title">Antecedentes Patológicos</h4>
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
                      class="btn collapse-button dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {selectedOption}
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => handleOptionClick("O+")}
                        >
                          O+
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => handleOptionClick("O-")}
                        >
                          O-
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => handleOptionClick("A+")}
                        >
                          A+
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => handleOptionClick("A-")}
                        >
                          A-
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => handleOptionClick("B+")}
                        >
                          B+
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => handleOptionClick("B-")}
                        >
                          B-
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => handleOptionClick("AB+")}
                        >
                          AB+
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => handleOptionClick("AB-")}
                        >
                          AB-
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer modal-buttons-section">
              <ReturnButton page="#staticBackdrop2" />
              <NextButton page="#staticBackdrop4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

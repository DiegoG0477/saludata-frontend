import InputLabel from "../atoms/InputLabel";
import "../../styles/atoms.css";
import NextButton from "../atoms/NextButton";
import axios from "axios";
import { useEffect, useState } from "react";
import RegistrarConsultaThree from "./RegistrarConsultaThree";
import { consultaDatos } from "../../data";

export default function RegistrarConsultaTwo(props) {
  const [ids, setIds] = useState([]);
  const [idPaciente, setIdPaciente] = useState("");

  const getTemporales = () => {
    axios
      .get("http://localhost:8080/api/v1/temporales")
      .then((response) => {
        console.log(response.data);
        if (response.data.length > 0){
          console.log("entro al if")
          setIds(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const vaciarTemporales = () => {
    axios
      .delete("http://localhost:8080/api/v1/temporales")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function guardarDatos() {
    console.log(idPaciente);
    consultaDatos.idPaciente = idPaciente;
  }

  const imprimir = () => {
    // Llamar a getTemporales para obtener los datos actualizados
    getTemporales();

    guardarDatos();
  };

  // useEffect para actualizar idPaciente cuando ids se actualice
  useEffect(() => {
    // Verificar si ids tiene algún valor
    if (ids.length > 0) {
      setIdPaciente(ids[0]);
      console.log("corriendo use effect en registrar consulta two");
      console.log(ids);
      console.log("el ID ES ESTE " + idPaciente + ids);

      // Vaciar la tabla después de haber establecido los datos correctamente
      vaciarTemporales();
    }
  }, [ids]);

  return (
    <>
      <div
        class="modal fade"
        id="modalRegConsulta"
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
                  text="Altura"
                  holder="Ingrese la Altura en CM"
                  ancho={13}
                />
                <InputLabel
                  text="Peso"
                  holder="Ingrese el Peso en KG"
                  ancho={13}
                />
                <InputLabel
                  text="Peso Prenatal"
                  holder="Ingrese el Peso en KG"
                  ancho={13}
                />
                <InputLabel text="Talla" holder="Ingrese la Talla" ancho={10} />
                <InputLabel text="Temperatura" holder="Celsius" ancho={10} />
              </div>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel
                  text="FC(Fracuencia Cardiaca)"
                  holder="0/0"
                  ancho={7}
                />
                <InputLabel
                  text="FR(Frecuencia Respiratoria)"
                  holder="0/0"
                  ancho={7}
                />
                <InputLabel
                  text="PA(Presion Arterial)"
                  holder="0/0"
                  ancho={7}
                />
                <InputLabel
                  text="Otro(Opcional)"
                  holder="Opcional"
                  ancho={16}
                />
              </div>
              <div
                style={{
                  backgroundColor: "#D9D9D9",
                  width: "65vw",
                  height: "14vw",
                  marginTop: "2vw",
                  borderRadius: "0.5vw",
                }}
              >
                <div
                  style={{
                    marginTop: "0.5vw",
                    marginLeft: "0.5vw",
                    position: "absolute",
                  }}
                >
                  <h4 className="modal-win-title">Observacion del Sistema</h4>
                  <h6 className="modal-win-title" style={{ marginTop: "1vw" }}>
                    !- El Paciente es alergico a: bla bla vbla vla
                  </h6>
                  <h6 className="modal-win-title">
                    !- Este paciente frecuentemente es diagnosticado con:
                  </h6>
                  <h6 className="modal-win-title">
                    !- Los signos de este paciente suelen ser: FR - Estatus, FC
                    - Estatus, Presión A. - Estatus
                  </h6>
                  <h6 className="modal-win-title">
                    !- Los medicamentos recetados a este paciente la última vez
                    fueron: bla, bla, bla, paracetamol, ibuprofeno, vitamina b,
                    salbutamol, etcetera
                  </h6>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{
                    position: "absolute",
                    marginTop: "11vw",
                    marginLeft: "57vw",
                    backgroundColor: "#64AFBF",
                    border: "0",
                    color: "white",
                    padding: "0.5vw 1.3vw",
                    borderRadius: "0.3vw",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Ver Mas
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn globalButton-red"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <NextButton page="#modalPaciente2" accion={imprimir} />
            </div>
          </div>
        </div>
      </div>
      <RegistrarConsultaThree idPaciente={idPaciente}/>
    </>
  );
}

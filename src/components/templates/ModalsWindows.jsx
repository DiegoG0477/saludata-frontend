import "../../styles/organisms.css";
import "../../styles/atoms.css";
import PacientSearch from "../PacientSearch";
import { useState, useEffect } from "react";
import "../../styles/atoms.css";
import NextButton from "../atoms/NextButton";
import ReturnButton from "../atoms/ReturnButton";
import FichaIdPacienteR from "./FichaIdPacienteR";
import AntecedentesModalW from "./AntecedentesModalW";
import PatologicosModalW from "./PatologicosModalW";
import GinecologicosModalW from "./GinecologicosModalW";
import RegistrarConsulta from "./RegistrarConsulta";
import RegistrarConsultaTwo from "./RegistrarConsultaTwo";
import RegistrarConsultaThree from "./RegistrarConsultaThree";
import RegistrarConsultaFour from "./RegistrarConsultaFour";
import RegistrarConsultaFive from "./RegistrarConsultaFive";
import { superPaciente } from "../../data";
import InputLabel from "../atoms/InputLabel";
import axios from "axios";

export async function insertarPaciente(paciente) {
  const id = generarId(paciente.nombre, paciente.apellidoMat, paciente.apellidoPat, paciente.fechaNacimiento);
  const pacienteDb = {
    idPaciente: id,
    nombre: paciente.nombre,
    apellidoMat: paciente.apellidoMat,
    apellidoPat: paciente.apellidoPat,
    fechaNacimiento: paciente.fechaNacimiento,
    telefono: paciente.telefono,
    genero: paciente.sexo,
    heredosFamiliares: paciente.heredosFamiliares,
  };

  try {
    // Insertar el paciente y esperar a que se complete
    const pacienteResponse = await insertPacienteTable(pacienteDb);

    // Si el paciente se insertó correctamente, procedemos a insertar la dirección
    if (pacienteResponse && pacienteResponse.status === 200) {
      const viviendaDb = {
        pacienteId: id,
        calle: paciente.calle,
        colonia: paciente.colonia,
        codigo: paciente.cp,
        casa: paciente.numeroCasa,
        originario: paciente.originario,
        residencia: paciente.residente,
      };
      
      insertViviendaTable(viviendaDb);
    }
  } catch (error) {
    console.log(error);
  }
}

function generarId(nombre, apellidoMat, apellidoPat, fechaNacimiento) {
  const fecha = new Date(fechaNacimiento);

  // Obtener el día, mes y año de la fecha
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Los meses en Date van de 0 a 11, por eso sumamos 1
  const anio = fecha.getFullYear();

  // Imprimir los resultados
  console.log("Día: " + dia);
  console.log("Mes: " + mes);
  console.log("Año: " + anio);

  let diaId, mesId, anioId;
  if (dia < 10) {
    diaId = "0" + dia;
  } else {
    diaId = String(dia);
  }

  if (mes < 10) {
    mesId = "0" + mes;
  } else {
    mesId = String(mes);
  }

  anioId = String(anio).substring(2, 4);

  const idPaciente =
    apellidoPat.substring(0, 2).toUpperCase() +
    apellidoMat.charAt(0).toUpperCase() +
    nombre.charAt(0).toUpperCase() +
    anioId +
    mesId +
    diaId;

  console.log("ID Paciente: " + idPaciente);
  return idPaciente;
}


// Función para insertar el paciente en la base de datos
async function insertPacienteTable(paciente) {
  try {
    console.log(paciente);
    const response = await axios.post("http://localhost:8080/api/v1/pacientes", paciente);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function insertViviendaTable(datos){
  const url = `http://localhost:8080/api/v1/direccion/${datos.pacienteId}`;
  const params = {
    calle: datos.calle,
    colonia: datos.colonia,
    codigo: datos.codigo,
    casa: datos.casa,
    originario: datos.originario,
    residencia: datos.residencia,
  };

  axios
    .post(url, null, { params: params })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default function ModalsWindows() {
  return (
    <>
      {/* ----------- Modal de Paciente ------------ */}

      <FichaIdPacienteR />
      <GinecologicosModalW></GinecologicosModalW>

      {/* ----------- Modal de Consulta ------------ */}
      <RegistrarConsulta></RegistrarConsulta>
      <RegistrarConsultaTwo></RegistrarConsultaTwo>
      <RegistrarConsultaThree></RegistrarConsultaThree>
      <RegistrarConsultaFour></RegistrarConsultaFour>
      <RegistrarConsultaFive></RegistrarConsultaFive>
      {/* ----------- Modal de Eliminar Paciente ------------ */}

      <div
        class="modal fade"
        id="modalEliminar"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content modal-window-content">
            <div class="modal-body">
              <PacientSearch
                title="Ficha de Eliminar Paciente"
                text="Ingrese los datos para hacer una busqueda y seleccione la acción."
                ancho={63}
                labelAncho={30}
                color="#BE2C35"
                botonText="Eliminar"
                anchoPicker={35}
                modal={true}
                mover={3}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-primary">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalModificar"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content modal-window-content">
            <div className="modal-body">
              <PacientSearch
                title="Modificar Paciente"
                text="Ingrese los datos para hacer una busqueda y seleccione la acción."
                ancho={63}
                labelAncho={30}
                color="#248087"
                botonText="Modificar"
                anchoPicker={35}
                modal={true}
                mover={3}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

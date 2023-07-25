import Title from "../atoms/Title";
import "../../styles/organisms.css";
import SummaryTable from "../molecules/SummaryTable";
import ReadInput from "../atoms/ReadInput";
const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function SummaryIdPacient(props) {
  const [paciente, setPaciente] = useState([]);
  const [pacienteDireccion, setPacienteDireccion] = useState([]);
  const [pacienteNoPatologico,setPacienteNoPatologico]= useState([]);
  const getPaciente = () => {
    axios
      .get("http://localhost:8080/api/v1/pacientes/buscar/"+ props.id)
      .then((response) => {
        setPaciente(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPacienteDireccion = () => {
    axios
      .get("http://localhost:8080/api/v1/direccion/buscar/"+ props.id)
      .then((response) => {
        setPacienteDireccion(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getPacienteNoPatologicos = () => {
    axios
      .get("http://localhost:8080/api/v1/ancedentesNoPatologicos/buscar/"+ props.id)
      .then((response) => {
        setPacienteNoPatologico(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  


  useEffect(() => {
    getPaciente();
    getPacienteDireccion();
    getPacienteNoPatologicos();
  }, []);

  function simplificarFecha(fechaCompleta) {
    const fecha = new Date(fechaCompleta);

    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
    const año = fecha.getFullYear();

    // Formatear la fecha como 'dd/mm/yyyy' o 'mm/dd/yyyy' (dependiendo de tu preferencia)
    const fechaSimplificada = `${dia < 10 ? "0" : ""}${dia}/${
      mes < 10 ? "0" : ""
    }${mes}/${año}`;

    return fechaSimplificada;
  }
  function completarGenero(genero){
    if(genero=="M"){
      return "MASCULINO"
    }else{
      return "FEMENINO"
    }
  }
  console.log(pacienteDireccion);
  console.log(pacienteNoPatologico);
  console.log(paciente);
  return (
    <>
      <div className="summary-idPa-page" style={{ width: "81vw" }}>
        <div className="summary-idPa-page-left">
          <Title text="Datos de Identificación"></Title>

          <div className="tree-inputs-div">
            <ReadInput label={nombrePaciente} readInfo={paciente.nombre} />
            <ReadInput label="Calle" readInfo={pacienteDireccion[0]?.[0]}  />
            <ReadInput label="Colonia" readInfo={pacienteDireccion[0]?.[1]} />
          </div>

          <div className="tree-inputs-div">
            <ReadInput label="Código Postal" readInfo={pacienteDireccion[0]?.[2]} />
            <ReadInput label="Número de Casa" readInfo={pacienteDireccion[0]?.[3]} />
            <ReadInput label="Número de Teléfono" readInfo={paciente.telefono} />
          </div>

          <div className="tree-inputs-div">
            <ReadInput label="Fecha de Nacimiento" readInfo={simplificarFecha(paciente.fechaNacimiento)} />
            <ReadInput label="Religión" readInfo={pacienteNoPatologico[0]?.[4]} />
            <ReadInput label="Sexo" readInfo={completarGenero(paciente.genero)} />
          </div>
        </div>

        <div>
          <Title text="Registro de Consultas"></Title>
          <SummaryTable id={props.id}></SummaryTable>
        </div>
      </div>
    </>
  );
}

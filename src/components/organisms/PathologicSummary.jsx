import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ServicesTable from "../molecules/ServicesTable";
import ReadInput from "../atoms/ReadInput";
import SmallReadInput from "../atoms/SmallReadInput";
import React, { useEffect, useState } from "react";
import axios from "axios";
const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
const cuartos = "4";
const habitantes = "5";

export default function PathologicSummary(props) {
  const [pacientePatologico, setPacientePatologico] = useState([]);
  const [pacienteNoPatologico,setPacienteNoPatologico]= useState([]);
  const [pacienteAlergias,setPacienteAlergias]= useState([]);
  const getPacientePatologico = () => {
    axios
      .get("http://localhost:8080/api/v1/antecedentesPatologicos/buscar/"+ props.id)
      .then((response) => {
        setPacientePatologico(response.data);
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
  const getPacienteAlergias = () => {
    axios
      .get("http://localhost:8080/api/v1/alergias/buscar/"+ props.id)
      .then((response) => {
        setPacienteAlergias(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPacientePatologico();
    getPacienteNoPatologicos();
    getPacienteAlergias();
  }, []);
  return (
    <>
      <div className="summary-Pacient-page">
        <div style={{ marginTop: "3vh" }}>
          <Title text="Datos Patológicos" />
        </div>

        <ReadInput style={{ marginTop: "5vh" }} label="Alergias" readInfo={pacienteAlergias} ></ReadInput>
        <ReadInput
          style={{ marginTop: "5vh" }}
          label="Enfermedades Crónicas"
          readInfo={pacientePatologico[0]?.[3]}
        ></ReadInput>
        <ReadInput
          style={{ marginTop: "5vh" }}
          label="Traumatismos"
          readInfo={pacientePatologico[0]?.[1]}
        ></ReadInput>

        <div className="four-inputs-div">
          <SmallReadInput label="Cirujías" readInfo={pacientePatologico[0]?.[4]}/>
          <SmallReadInput label="Hospitalizaciones" readInfo={pacientePatologico[0]?.[2]}/>
          <SmallReadInput label="COVID 19" readInfo={pacientePatologico[0]?.[0]}/>
          <SmallReadInput label="Tipo de Sangre" readInfo={pacienteNoPatologico[0]?.[5]}/>
        </div>
      </div>
    </>
  );
}

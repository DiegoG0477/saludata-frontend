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

export default function LifeSummaryPacient(props) {
    const [paciente, setPaciente] = useState([]);
    const [pacienteDireccion, setPacienteDireccion] = useState([]);
    const [pacienteNoPatologico,setPacienteNoPatologico]= useState([]);
    const [pacienteVivenda,setPacienteVivienda]= useState([]);
    const [pacienteAlimentacion,setPacienteAlimentacion]= useState([]);
    const [pacienteOriginario,setPacienteOriginario]= useState([]);
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
    const getPacienteVivienda = () => {
      axios
        .get("http://localhost:8080/api/v1/viviendas/buscar/"+ props.id)
        .then((response) => {
          setPacienteVivienda(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const getPacienteAlimentacion= () => {
      axios
        .get("http://localhost:8080/api/v1/alimentacion/buscar/"+ props.id)
        .then((response) => {
          setPacienteAlimentacion(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const getPacienteOriginario= () => {
      axios
        .get("http://localhost:8080/api/v1/originario/buscar/"+ props.id)
        .then((response) => {
          setPacienteOriginario(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    useEffect(() => {
      getPaciente();
      getPacienteDireccion();
      getPacienteNoPatologicos();
      getPacienteVivienda();
      getPacienteAlimentacion();
      getPacienteOriginario();
    }, []);

  return (
    <>
      <div className="summary-Pacient-page" style={{ width: "81vw" }}>
        <div style={{ marginTop: "3vh" }}>
          <Title text="Antecedentes" />
        </div>

        <ReadInput label="Heredo Familiares" readInfo={paciente.heredosFamiliares}/>

        <div className="four-inputs-div">
          <ReadInput label="Orginario de" readInfo={pacienteOriginario[0]?.[2]+", "+pacienteOriginario[0]?.[1]+", "+pacienteOriginario[0]?.[0]}/>
          <ReadInput label="Residencia Actual" readInfo={pacienteDireccion[0]?.[6] +", "+pacienteDireccion[0]?.[5]+", "+pacienteDireccion[0]?.[4]}/>
          <ReadInput label="Lengua Indigena" readInfo={pacienteNoPatologico[0]?.[0]}/>
          <ReadInput label="Habita en" readInfo={pacienteVivenda[0]?.[0]+" de "+pacienteVivenda[0]?.[3]}/>
        </div>

        <div className="two-inputs-div">
          <ReadInput
            label="Cuartos y Habitantes"
            readInfo={
              pacienteVivenda[0]?.[2] + " habitaciones para " + pacienteVivenda[0]?.[1] + " habitantes "
            }
          ></ReadInput>
          <ServicesTable id={props.id}/>
        </div>

        <div className="six-inputs-div">
          {/* <div style={{display:"flex", justifyContent:"space-between"}}> */}
          <SmallReadInput label="Comidas Diarias" readInfo={pacienteAlimentacion[0]?.[0]}/>
          <SmallReadInput label="Ingesta de Agua" readInfo={pacienteAlimentacion[0]?.[1]+" Litros"}/>
          <SmallReadInput label="Acepta Transfusión" readInfo={pacienteNoPatologico[0]?.[2]}/>
          {/* </div> */}

          <ReadInput label="Escolaridad" readInfo={pacienteNoPatologico[0]?.[7]}/>
          <ReadInput label="Ocupación" readInfo={pacienteNoPatologico[0]?.[3]}/>
          <ReadInput label="Estado Civil" readInfo={pacienteNoPatologico[0]?.[6]}/>
        </div>
      </div>
    </>
  );
}

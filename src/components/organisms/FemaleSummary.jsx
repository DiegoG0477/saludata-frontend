import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ReadInput from "../atoms/ReadInput";
import SmallReadInput from "../atoms/SmallReadInput";
import GynecologicalTable from "../molecules/GynecologicalTable";
import FemaleTable from "../molecules/FemaleTable";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FemaleSummary(props) {
  const [pacienteGineco,setPacienteGineco]= useState([]);
  const getPacienteGineco = () => {
    axios
      .get("http://localhost:8080/api/v1/gineco/buscar/"+ props.id)
      .then((response) => {
        setPacienteGineco(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPacienteGineco();
  }, []);
  return (
    <>
      <div className="summary-Pacient-page">
        <div style={{ marginTop: "3vh" }}>
          <Title text="Datos Gineco-Obstréticos" />
        </div>

        <div
          className="four-inputs-div"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <GynecologicalTable id={props.id}/>
          <SmallReadInput label="Menarca" readInfo={pacienteGineco[0]?.[0]}/>
          <SmallReadInput label="Ciclos Menstruales" readInfo={pacienteGineco[0]?.[1]} />
          <SmallReadInput label="IVSA" readInfo={pacienteGineco[0]?.[4]}/>
        </div>

        <div style={{ marginTop: "5vh", display:"flex", justifyContent:"center" }}>
            <FemaleTable id={props.id}/>
        </div>

        <div style={{ marginTop: "5vh" }}>
        <ReadInput label="Antecedentes Perinatales" readInfo={pacienteGineco[0]?.[7]}></ReadInput>
        </div>

      </div>
    </>
  );
}

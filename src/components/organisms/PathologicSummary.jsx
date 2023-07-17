import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ServicesTable from "../molecules/ServicesTable";
import ReadInput from "../atoms/ReadInput";
import SmallReadInput from "../atoms/SmallReadInput";

const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
const cuartos = "4";
const habitantes = "5";

export default function PathologicSummary() {
  return (
    <>
      <div className="summary-Pacient-page">
        <div style={{ marginTop: "3vh" }}>
          <Title text="Datos Patológicos" />
        </div>

        <ReadInput style={{ marginTop: "5vh" }} label="Alergias"></ReadInput>
        <ReadInput
          style={{ marginTop: "5vh" }}
          label="Enfermedades Crónicas"
        ></ReadInput>
        <ReadInput
          style={{ marginTop: "5vh" }}
          label="Traumatismos"
        ></ReadInput>

        <div className="four-inputs-div">
          <SmallReadInput label="Cirujías" />
          <SmallReadInput label="Hospitalizaciones" />
          <SmallReadInput label="COVID 19" />
          <SmallReadInput label="Tipo de Sangre" />
        </div>
      </div>
    </>
  );
}

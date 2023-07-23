import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ServicesTable from "../molecules/ServicesTable";
import ReadInput from "../atoms/ReadInput";
import SmallReadInput from "../atoms/SmallReadInput";

const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
const cuartos = "4";
const habitantes = "5";

export default function LifeSummaryPacient() {
  return (
    <>
      <div className="summary-Pacient-page" style={{ width: "81vw" }}>
        <div style={{ marginTop: "3vh" }}>
          <Title text="Antecedentes" />
        </div>

        <ReadInput label="Heredo Familiares"></ReadInput>

        <div className="four-inputs-div">
          <ReadInput label="Orginario de"></ReadInput>
          <ReadInput label="Residencia Actual"></ReadInput>
          <ReadInput label="Lengua Indigena"></ReadInput>
          <ReadInput label="Habita en casa"></ReadInput>
        </div>

        <div className="two-inputs-div">
          <ReadInput
            label="Cuartos y Habitantes"
            readInfo={
              cuartos + " habitaciones para " + habitantes + " habitantes "
            }
          ></ReadInput>
          <ServicesTable />
        </div>

        <div className="six-inputs-div">
          {/* <div style={{display:"flex", justifyContent:"space-between"}}> */}
          <SmallReadInput label="Comidas Diarias"></SmallReadInput>
          <SmallReadInput label="Ingesta de Agua"></SmallReadInput>
          <SmallReadInput label="Acepta Transfusión"></SmallReadInput>
          {/* </div> */}

          <ReadInput label="Escolaridad"></ReadInput>
          <ReadInput label="Ocupación"></ReadInput>
          <ReadInput label="Estado Civil"></ReadInput>
        </div>
      </div>
    </>
  );
}

import Title from "../atoms/Title";
import "../../styles/organisms.css";
import SummaryTable from "../molecules/SummaryTable";
import ReadInput from "../atoms/ReadInput";

const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";

export default function SummaryIdPacient() {
  return (
    <>
      <div className="summary-idPa-page" style={{ width: "81vw" }}>
        <div className="summary-idPa-page-left">
          <Title text="Datos de Identificación"></Title>

          <div className="tree-inputs-div">
            <ReadInput label={nombrePaciente} readInfo={nombre} />
            <ReadInput label="Calle" readInfo={nombre} />
            <ReadInput label="Colonia" readInfo={nombre} />
          </div>

          <div className="tree-inputs-div">
            <ReadInput label="Código Postal" readInfo={nombre} />
            <ReadInput label="Número de Casa" readInfo={nombre} />
            <ReadInput label="Número de Teléfono" readInfo={nombre} />
          </div>

          <div className="tree-inputs-div">
            <ReadInput label="Fecha de Nacimiento" readInfo={nombre} />
            <ReadInput label="Religión" readInfo={nombre} />
            <ReadInput label="Sexo" readInfo={nombre} />
          </div>
        </div>

        <div>
          <Title text="Registro de Consultas"></Title>
          <SummaryTable></SummaryTable>
        </div>
      </div>
    </>
  );
}

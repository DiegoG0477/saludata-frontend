import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ReadInput from "../atoms/ReadInput";
import SmallReadInput from "../atoms/SmallReadInput";
import GynecologicalTable from "../molecules/GynecologicalTable";
import FemaleTable from "../molecules/FemaleTable";

export default function FemaleSummary() {
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
          <GynecologicalTable />
          <SmallReadInput label="Menarca" />
          <SmallReadInput label="Ciclos Menstruales" />
          <SmallReadInput label="IVSA" />
        </div>

        <div style={{ marginTop: "5vh", display:"flex", justifyContent:"center" }}>
            <FemaleTable />
        </div>

        <div style={{ marginTop: "5vh" }}>
        <ReadInput label="Antecedentes Perinatales"></ReadInput>
        </div>

      </div>
    </>
  );
}

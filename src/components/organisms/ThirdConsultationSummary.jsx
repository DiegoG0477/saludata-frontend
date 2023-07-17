import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ServicesTable from "../molecules/ServicesTable";
import ReadInput from "../atoms/ReadInput";
import SmallReadInput from "../atoms/SmallReadInput";

const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
const cuartos = "4";
const habitantes = "5";

export default function ThirdConsultationSummary() {
    return (
        <>
            <div className="summary-Pacient-page">
                <div style={{ marginTop: "3vh" }}>
                    <Title text="PARTE TRES" />
                </div>

                <div className="tree-inputs-div">
                    <ReadInput label="S. Endocrino"></ReadInput>
                    <ReadInput label="S. Locomotor"></ReadInput>
                    <ReadInput label="Sintomas Generales"></ReadInput>
                </div>
                <ReadInput label="Inspreccion General"></ReadInput>
                <div className="two-inputs-div">
                    <ReadInput label="Cabez"></ReadInput>
                    <ReadInput label="Torax"></ReadInput>
                </div>

                <div className="two-inputs-div">
                    <ReadInput label="Adomen"></ReadInput>
                    <ReadInput label="Genitales "></ReadInput>
                </div>
            </div>
        </>
    );
}
import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ServicesTable from "../molecules/ServicesTable";
import ReadInput from "../atoms/ReadInput";
import SmallReadInput from "../atoms/SmallReadInput";

const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
const cuartos = "4";
const habitantes = "5";

export default function FourthSummaryQuery() {
    return (
        <>
            <div className="summary-Pacient-page">
                <div style={{ marginTop: "3vh" }}>
                    <Title text="PARTE CUATRO" />
                </div>

                <div className="two-inputs-div">
                    <ReadInput label="Extremidades Pelvicas"></ReadInput>
                    <ReadInput label="Extremidades Toraxicas"></ReadInput>
                </div>
                <ReadInput label="Diagnostico"></ReadInput>
                <ReadInput label="Extremidades Toraxicas"></ReadInput>

            </div>
        </>
    );
}
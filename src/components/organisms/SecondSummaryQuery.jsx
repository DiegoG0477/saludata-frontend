import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ReadInput from "../atoms/ReadInput";

const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
const cuartos = "4";
const habitantes = "5";

export default function SecondSummaryQuery() {
    return (
        <>
            <div className="summary-Pacient-page">
                <div style={{ marginTop: "3vh" }}>
                    <Title text="PARTE DOS" />
                </div>

                <div className="two-inputs-div">
                    <ReadInput label="Motivo de la consulta"></ReadInput>
                    <ReadInput label="Sintomas de iniciasion"></ReadInput>
                </div>
                <div className="tree-inputs-div">
                    <ReadInput label="Lavoratorios"></ReadInput>
                    <ReadInput label="Estudios previos"></ReadInput>
                    <ReadInput label="Terapeutica anteriormente"></ReadInput>
                </div>

                <div className="tree-inputs-div">
                    <ReadInput label="A. Digestivos"></ReadInput>
                    <ReadInput label="A. Digestivos "></ReadInput>
                    <ReadInput label=" A. Urinario"></ReadInput>
                </div>

                <div className="tree-inputs-div">
                    <ReadInput label="Genitales"></ReadInput>
                    <ReadInput label="S. Cardio Vascular "></ReadInput>
                    <ReadInput label="S. Nervioso"></ReadInput>
                </div>

            </div>
        </>
    );
}
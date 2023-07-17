import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ServicesTable from "../molecules/ServicesTable";
import ReadInput from "../atoms/ReadInput";
import SmallReadInput from "../atoms/SmallReadInput";

const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
const cuartos = "4";
const habitantes = "5";

export default function FirstConsultationSummary() {
    return (
        <>
            <div className="summary-Pacient-page">
                <div style={{ marginTop: "3vh" }}>
                    <Title text="PARTE UNO" />
                </div>
                <div className="tree-inputs-div">
                    <ReadInput label="Nombre"></ReadInput>
                    <ReadInput label="Fecha de nacimiento"></ReadInput>
                    <ReadInput label="Sexo"></ReadInput>

                </div>

                <div className="four-inputs-div">
                    <ReadInput label="Altura"></ReadInput>
                    <ReadInput label="Peso"></ReadInput>
                    <ReadInput label="Preso prenatal"></ReadInput>
                    <ReadInput label="Talla"></ReadInput>
                </div>
                <div className="four-inputs-div">
                    <ReadInput label="Temperatura"></ReadInput>
                    <ReadInput label="FC(Fracuencia Cardiaca)"></ReadInput>
                    <ReadInput label="FR(Frecuencia Respiratoria)"></ReadInput>
                    <ReadInput label="PA(Presion Arterial)"></ReadInput>
                </div>
                <ReadInput label="Otro"></ReadInput>

            </div>
        </>
    );
}
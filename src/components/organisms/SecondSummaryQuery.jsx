import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ReadInput from "../atoms/ReadInput";

const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
const cuartos = "4";
const habitantes = "5";

export default function SecondSummaryQuery({consultaInte,consulta}) {
    return (
        <>
            <div className="summary-Pacient-page">
                <div style={{ marginTop: "3vh" }}>
                    <Title text="PARTE DOS" />
                </div>

                <div className="two-inputs-div">
                    <ReadInput label="Motivo de la consulta" readInfo={consulta.motivoConsulta}></ReadInput>
                    <ReadInput label="Sintomas de iniciasion"  readInfo={consulta.motivoConsulta}></ReadInput>
                </div>
                <div className="tree-inputs-div">
                    <ReadInput label="Lavoratorios" ></ReadInput>
                    <ReadInput label="Estudios previos"></ReadInput>
                    <ReadInput label="Terapeutica anteriormente"></ReadInput>
                </div>

                <div className="tree-inputs-div">
                    <ReadInput label="A. Digestivos" readInfo={consultaInte[0]?.[1]}></ReadInput>
                    <ReadInput label="A. Respiratorio " readInfo={consultaInte[0]?.[2]}></ReadInput>
                    <ReadInput label=" A. Urinario" readInfo={consultaInte[0]?.[3]}></ReadInput>
                </div>

                <div className="tree-inputs-div">
                    <ReadInput label="Genitales" readInfo={consultaInte[0]?.[4]}></ReadInput>
                    <ReadInput label="S. Cardio Vascular " readInfo={consultaInte[0]?.[5]}></ReadInput>
                    <ReadInput label="S. Nervioso" readInfo={consultaInte[0]?.[6]}></ReadInput>
                </div>

            </div>
        </>
    );
}
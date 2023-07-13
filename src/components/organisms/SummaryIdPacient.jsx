import Title from "../atoms/Title";
import "../../styles/organisms.css"
import SummaryTable from "../molecules/SummaryTable";

export default function SummaryIdPacient() {
  return (
    <>
    <div className="summary-idPa-page ">
    <div className="summary-idPa-page-left" >
        <Title text="Datos de Identificación"></Title>
      </div>

      <div >
        <Title text="Registro de Consultas"></Title>
        <SummaryTable ></SummaryTable>
      </div>
    </div>
    </>
  );
}

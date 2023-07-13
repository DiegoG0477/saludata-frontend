import SummaryIdPacient from "../organisms/SummaryIdPacient"
import SummaryTable from "../molecules/SummaryTable"

export default function PacientSummary(){

    return(
        <div className="system-content ">
        {/* <div className="identification-data"> */}
            <SummaryIdPacient></SummaryIdPacient>
            {/* <SummaryTable></SummaryTable> */}
        {/* </div> */}
    </div>
    )

}
import SummaryIdPacient from "../organisms/SummaryIdPacient"
import LifeSummaryPacient from "../organisms/LifeSummaryPacient"
import PathologicSummary from "../organisms/PathologicSummary"
import FemaleSummary from "../organisms/FemaleSummary"
import { useParams } from "react-router-dom";

export default function PacientSummary(){
    const { id } = useParams();
    console.log(id);
    return(
        <>
        <div className="system-content">

        {/* <div className="identification-data"> */}
            <SummaryIdPacient id={id}></SummaryIdPacient>
            <LifeSummaryPacient id={id}></LifeSummaryPacient>
            <PathologicSummary id={id}></PathologicSummary>
            <FemaleSummary id={id}></FemaleSummary>

        {/* </div> */}
    </div>
    </>

    )

}
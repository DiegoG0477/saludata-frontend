import SummaryIdPacient from "../organisms/SummaryIdPacient"
import LifeSummaryPacient from "../organisms/LifeSummaryPacient"
import PathologicSummary from "../organisms/PathologicSummary"
import FemaleSummary from "../organisms/FemaleSummary"

export default function PacientSummary(){

    return(
        <>
        <div className="system-content"  >

        {/* <div className="identification-data"> */}
            <SummaryIdPacient></SummaryIdPacient>
            <LifeSummaryPacient></LifeSummaryPacient>
            <PathologicSummary></PathologicSummary>
            <FemaleSummary></FemaleSummary>
        {/* </div> */}
    </div></>

    )

}
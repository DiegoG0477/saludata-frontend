import FirstConsultationSummary from "../organisms/FirstConsultationSummary.jsx";
import SecondSummaryQuery from "../organisms/SecondSummaryQuery.jsx";
import ThirdConsultationSummary from "../organisms/ThirdConsultationSummary.jsx";
import FourthSummaryQuery from "../organisms/FourthSummaryQuery.jsx";

export default function FileSummary(){

    return(
        <>
        <div className="system-content"  >

            {/* <div className="identification-data"> */}
            <FirstConsultationSummary></FirstConsultationSummary>
            <SecondSummaryQuery></SecondSummaryQuery>
            <ThirdConsultationSummary></ThirdConsultationSummary>
            <FourthSummaryQuery></FourthSummaryQuery>

            {/* </div> */}
        </div></>
    )
}
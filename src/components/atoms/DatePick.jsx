import { DatePicker } from "@mui/x-date-pickers";
import styled from "styled-components";

export default function DatePick(props) {
  const DatePick = styled(DatePicker)`
  `;

  return (
    <div>

    {/* <label style={{fontWeight:"bolder"}}>
      Fecha de nacimiento del paciente
    </label> */}
    <DatePick
      format="dd/MM/yyyy"
      label="Ingrese Fecha"
      formatDensity="spacious"
      slotProps={{ textField: { variant: "filled" } }}
      value={props.fecha} onChange={(newValue) => props.metodo(newValue)}
    />

    </div>
  );
}

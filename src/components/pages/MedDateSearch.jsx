import Title from "../atoms/Title";
import "../../styles/organisms.css";
import "../../styles/atoms.css";
import InputLabel from "../atoms/InputLabel";
import DatePick from "../atoms/DatePick";
import ColumnButton from "../atoms/ColumnButton";

export default function MedDateSearch() {
  return (
    <>
      <div className="system-content">
        <Title text="Historial de Consultas"></Title>

        <div className="tree-inputs-div">
          <InputLabel text="Diagnóstico"></InputLabel>
          <div>
            <label
              htmlFor="medicalDate"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Fecha de Consulta
            </label>
            <DatePick id="medicalDate"></DatePick>
          </div>

          <div
            style={{
              height: "11vh",
              paddingTop: "6vh",
              marginLeft: "-7vw",
            }}
          >
            <button
              className="btn btn-primary globalButton"
              style={{ width: "20vw" }}
            >
              Buscar
            </button>
          </div>
        </div>

        <table class="tablaS" style={{width:"80vw", marginTop:"6vh"}}>
            <thead>
              <tr>
                <th scope="col" className="left-th">Nombre Completo</th>
                <th scope="col">Fecha</th>
                <th scope="col">Diagnóstico</th>
                <th scope="col" className="right-th">Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Ejemplo Persona</th>
                <td>9611111111</td>
                <td>24 Años</td>
                <td>
                <ColumnButton text="Ver Más" color="#248087"/>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>dssdak</td>
                <td>Ojfjfo</td>
                <td>@mui</td>
              </tr>
            </tbody>
          </table>
      </div>
    </>
  );
}

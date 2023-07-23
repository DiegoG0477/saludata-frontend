import Title from "../atoms/Title";
import "../../styles/organisms.css";
import "../../styles/atoms.css";
import InputLabel from "../atoms/InputLabel";
import DatePick from "../atoms/DatePick";
import ColumnButton from "../atoms/ColumnButton";

export default function MedDateSearch(props) {
  return (
    <>
      <div className="system-content">
        <Title text="Historial de Consultas"></Title>
        <h6 style={{ fontWeight: "bold" }}>
          Ingrese los datos de la consulta a buscar
        </h6>

        <div
          style={{
            marginTop: "3vh",
            display: "flex",
            justifyContent: "space-between",
            width: props.ancho+"vw",
            marginBottom: "-3vh",
          }}
        >
          
          <InputLabel text="Nombres del Paciente" holder="Ingrese el nombre(s) del paciente" ancho={props.labelAncho}/>
          <InputLabel text="Apellido Paterno Paciente" holder="Ingrese apellido paterno del paciente" ancho={props.labelAncho}/>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: props.ancho+"vw",
            marginTop:"2vw"
          }}
        >
          <InputLabel text="Apellido Materno del Paciente" holder="Ingrese apellido materno del paciente" ancho={props.labelAncho}/>
          <div style={{marginRight:props.mover+"vw"}}>
            <p
              // htmlFor="birthdate"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Fecha de Consulta
            </p>

            <div className="input-search-container" style={{ width: props.anchoPicker+"vw", height: "8vh"}}>
              <DatePick className="date" format="dd/MM/yyyy" />
              <button className="btn btn-primary globalButton">Buscar</button>
            </div>
          </div>
          
        </div>

        <table class="tablaS" style={{width:"80vw"}}>
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

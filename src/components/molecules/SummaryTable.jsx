import ColumnButton from "../atoms/ColumnButton";

export default function ServicesTable() {
  return (
      <table class="tablaS" style={{  width: "29vw", marginTop:"5vh"}}>
        <thead>
          <tr>
            <th scope="col" className="left-th">
              Fecha
            </th>
            <th scope="col">Diagnóstico</th>
            <th scope="col" className="right-th">
              Acción
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">12-07-23</th>
            <td>Gripe</td>
            <td>
              <ColumnButton text="Ver Más" color="#248087" />
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>dssdak</td>
            <td>Ojfjfo</td>
          </tr>
        </tbody>
      </table>
  );
}

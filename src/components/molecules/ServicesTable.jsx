

export default function SummaryTable() {
  return (
      <table class="tablaS" style={{width:"40vw"}}>
        <thead>
          <tr>
            <th scope="col" className="left-th">
              Agua Potable
            </th>
            <th scope="col" >Luz</th>
            <th scope="col"  >
              Drenaje
            </th>
            <th scope="col" >Cocina con leña</th>
            <th scope="col" className="right-th">Zoonosis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >Sí</td>
            <td>No</td>
            <td >Sí</td>
            <td>No</td>
            <td>Sí</td>
          </tr>
        </tbody>
      </table>
  );
}

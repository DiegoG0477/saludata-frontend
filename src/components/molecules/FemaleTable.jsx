

export default function FemaleTable() {
    return (
        <table class="tablaS" style={{width:"60vw"}}>
          <thead>
            <tr>
              <th scope="col" className="left-th">
                MPF
              </th>
              <th scope="col" >Detección Oportuna de CA de mama</th>
              <th scope="col"  >
                FUM
              </th>
              <th scope="col" className="right-th">Papanicolau</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >Sí</td>
              <td>No</td>
              <td >Sí</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
    );
  }
  
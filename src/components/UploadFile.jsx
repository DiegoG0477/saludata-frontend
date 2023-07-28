import React, { useEffect, useState } from "react";
import "../App.css";
import DatePick from "./atoms/DatePick";
import ColumnButton from "./atoms/ColumnButton";
import "../styles/uploadFile.css";
import "../assets/uploadfile.png";
import InputLabel from "./atoms/InputLabel";
import axios from "axios";
import { generarId } from "../data/connector";
function UploadFile(props) {

  const [pacientes, setPacientes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellidoMat, setApellidoMat] = useState("");
  const [apellidoPat, setApellidoPat] = useState("");
  const [fecha, setFecha] = useState("");
  const id= generarId(nombre,apellidoMat,apellidoPat,fecha);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      axios
          .post(`http://localhost:8080/api/v1/s3/upload`, formData) // Corregir las comillas aquí
          .then((response) => {
            console.log(response.data);

            // Aquí puedes mostrar un mensaje de éxito o realizar alguna acción adicional después de subir el archivo.
          })
          .catch((error) => {
            console.error(error);
            // Aquí puedes mostrar un mensaje de error o realizar alguna acción adicional si ocurre algún problema durante la subida del archivo.
          });
    }
  };


  const getPacientes = () => {
      axios
      .get("http://localhost:8080/api/v1/pacientes")
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPaciente = () => {
    axios
    .get("http://localhost:8080/api/v1/pacientes/buscar/"+ id)
    .then((response) => {
      const pacienteArray = [response.data];
      setPacientes(pacienteArray);
    })
    .catch((error) => {
      console.log(error);
    });
};

  useEffect(() => {
    getPacientes();
  }, []);

  async function buscar(){
    getPaciente();
    Swal.fire({
      icon: 'success',
      title: 'Paciente encontrado',
      showConfirmButton: false,
      timer: 1500
    })
  }

  function simplificarFecha(fechaCompleta) {
    const fecha = new Date(fechaCompleta);

    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
    const año = fecha.getFullYear();

    // Formatear la fecha como 'dd/mm/yyyy' o 'mm/dd/yyyy' (dependiendo de tu preferencia)
    const fechaSimplificada = `${dia < 10 ? "0" : ""}${dia}/${
      mes < 10 ? "0" : ""
    }${mes}/${año}`;

    return fechaSimplificada;
  }

  function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const diferencia = fechaActual - fechaNacimiento;

    // Convertir la diferencia a años
    const edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
    return edad;
  }
  return (
    <>
      <div className="system-content">
        <h4 style={{ fontWeight: "bold" }}>{props.title}</h4>
        <h6 style={{ fontWeight: "bold" }}>{props.text}</h6>

        {/* width:"82vw" */}
        <div
          style={{
            marginTop: "3vh",
            display: "flex",
            justifyContent: "space-between",
            width: props.ancho + "vw",
            marginBottom: "-3vh",
          }}
        >
          <InputLabel
            text="Nombres del Paciente"
            holder="Ingrese el nombre(s) del paciente"
            ancho={props.labelAncho}
            metodo={setNombre}
          />
          <InputLabel
            text="Apellido Paterno Paciente"
            holder="Ingrese apellido paterno del paciente"
            ancho={props.labelAncho}
            metodo={setApellidoPat}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: props.ancho + "vw",
            marginTop: "2vw",
          }}
        >
          <InputLabel
            text="Apellido Materno del Paciente"
            holder="Ingrese apellido materno del paciente"
            ancho={props.labelAncho}
            metodo={setApellidoMat}
          />
          <div style={{ marginRight: props.mover + "vw" }}>
            <p
              // htmlFor="birthdate"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Fecha de Nacimiento del Paciente
            </p>

            <div
              className="input-search-container"
              style={{ width: props.anchoPicker + "vw", height: "8vh" }}
            >
              <DatePick className="date" format="dd/MM/yyyy"  metodo={setFecha}/>
              <button className="btn btn-primary globalButton" onClick={buscar}>Buscar</button>
            </div>
          </div>
        </div>

        <div>
          <table className="tablaS" style={{ width: "78vw" }}>
            <thead>
              <tr>
                <th scope="col" className="left-th">
                  Nombre Completo
                </th>
                <th scope="col">Teléfono</th>
                <th scope="col">Edad</th>
                <th scope="col" className="right-th">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((val) => (
                  <tr key={val.id}>
                    <th scope="row">
                      {val.nombre + " " + val.apellidoPat + " " + val.apellidoMat}
                    </th>
                    <td>{val.telefono}</td>
                    <td>
                      {calcularEdad(new Date(val.fechaNacimiento)) + " años"}
                    </td>
                    <td>
                      <input type="file" id="upload" hidden onChange={handleFileChange} />
                      <label
                          htmlFor="upload"
                          className="btn btn-secondary btn-sm column-btn"
                          style={{ background: "#248087" }}
                          onClick={handleFileUpload}

                          // Llamar a la función al hacer clic en el botón
                      >
                        Subir Archivo
                      </label>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UploadFile;

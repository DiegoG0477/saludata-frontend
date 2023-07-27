import axios from "axios";

export async function insertarPaciente(paciente) {
  const id = generarId(
    paciente.nombre,
    paciente.apellidoMat,
    paciente.apellidoPat,
    paciente.fechaNacimiento
  );
  const pacienteDb = {
    idPaciente: id,
    nombre: paciente.nombre,
    apellidoMat: paciente.apellidoMat,
    apellidoPat: paciente.apellidoPat,
    fechaNacimiento: paciente.fechaNacimiento,
    telefono: paciente.telefono,
    genero: paciente.sexo,
    heredosFamiliares: paciente.heredosFamiliares,
  };

  try {
    // Insertar el paciente y esperar a que se complete
    const pacienteResponse = await insertPacienteTable(pacienteDb);

    // Si el paciente se insertó correctamente, procedemos a insertar la dirección
    if (pacienteResponse && pacienteResponse.status === 200) {
      const viviendaDb = {
        pacienteId: id,
        calle: paciente.calle,
        colonia: paciente.colonia,
        codigo: paciente.cp,
        casa: paciente.numeroCasa,
        originario: paciente.originario,
        residencia: paciente.residente,
      };

      insertViviendaTable(viviendaDb);

      if(paciente.servicios.contains("Zoonosis")) {
        var zoonosis = "SI";
      } else {
        zoonosis = "NO";
        }
      const noPatologicosDb = {
        pacienteId: id,
        lengua: paciente.lenguaIndigena,
        zoonosis: zoonosis,
        
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export function generarId(nombre, apellidoMat, apellidoPat, fechaNacimiento) {
  const fecha = new Date(fechaNacimiento);

  // Obtener el día, mes y año de la fecha
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Los meses en Date van de 0 a 11, por eso sumamos 1
  const anio = fecha.getFullYear();

  // Imprimir los resultados
  console.log("Día: " + dia);
  console.log("Mes: " + mes);
  console.log("Año: " + anio);

  let diaId, mesId, anioId;
  if (dia < 10) {
    diaId = "0" + dia;
  } else {
    diaId = String(dia);
  }

  if (mes < 10) {
    mesId = "0" + mes;
  } else {
    mesId = String(mes);
  }

  anioId = String(anio).substring(2, 4);

  const idPaciente =
    apellidoPat.substring(0, 2).toUpperCase() +
    apellidoMat.charAt(0).toUpperCase() +
    nombre.charAt(0).toUpperCase() +
    anioId +
    mesId +
    diaId;

  console.log("ID Paciente: " + idPaciente);
  return idPaciente;
}

// Función para insertar el paciente en la base de datos
async function insertPacienteTable(paciente) {
  try {
    console.log(paciente);
    const response = await axios.post(
      "http://localhost:8080/api/v1/pacientes",
      paciente
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function insertViviendaTable(datos) {
  const url = `http://localhost:8080/api/v1/direccion/${datos.pacienteId}`;
  const params = {
    calle: datos.calle,
    colonia: datos.colonia,
    codigo: datos.codigo,
    casa: datos.casa,
    originario: datos.originario,
    residencia: datos.residencia,
  };

  axios
    .post(url, null, { params: params })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

function insertNoPatologicosTable(datos) {
  const url = `http://localhost:8080/api/v1/direccion/${datos.pacienteId}`;
  const params = {
    calle: datos.calle,
    colonia: datos.colonia,
    codigo: datos.codigo,
    casa: datos.casa,
    originario: datos.originario,
    residencia: datos.residencia,
  };

  axios
    .post(url, null, { params: params })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

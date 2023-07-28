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
      const direccionDb = {
        pacienteId: id,
        calle: paciente.calle,
        colonia: paciente.colonia,
        codigo: paciente.cp,
        casa: paciente.numeroCasa,
        originario: paciente.originario,
        residencia: paciente.residente,
      };

      insertDireccionTable(direccionDb);

      if (paciente.servicios.includes("Zoonosis")) {
        var zoonosis = "SI";
      } else {
        zoonosis = "NO";
      }
      const noPatologicosDb = {
        pacienteId: id,
        lengua: paciente.lenguaIndigena,
        zoonosis: zoonosis,
        transfusion: paciente.transfusionSangre,
        ocupacion: paciente.ocupacion,
        religion: paciente.religion,
        sangre: paciente.tipoSangre,
        estadoCivil: paciente.estadoCivil,
        escolaridad: paciente.escolaridad,
      };

      insertNoPatologicosTable(noPatologicosDb);

      const alimentacionDb = {
        pacienteId: id,
        comidas: paciente.comidasDiarias,
        agua: paciente.ingestaAgua,
      };

      insertAlimentacionTable(alimentacionDb);

      const antecedentesPatologicosDb = {
        pacienteId: id,
        covid: paciente.covid19,
        traumatismo: paciente.traumatismo,
        hospitalizacion: paciente.hospitalizaciones,
        enfermedad: paciente.enfermedadesCronicas,
        cirugias: paciente.cirujias,
      };

      insertAntecedentesPatologicosTable(antecedentesPatologicosDb);

      if (paciente.sexo === "F") {
        const antecedentesGinecoObstetricosDb = {
          pacienteId: id,
          menarca: paciente.menarca,
          ciclos: paciente.ciclosMenstruales,
          papanicolau: paciente.papanicolau,
          mama: paciente.deteccionCancer,
          ivsa: paciente.ivsa,
          mpf: paciente.mpf,
          antecedentes: paciente.antecedentesPerinatales,
          fum: paciente.fum,
        };

        insertGinecoObTable(antecedentesGinecoObstetricosDb);

        const gpacDb = {
          pacienteId: id,
          g: paciente.g,
          p: paciente.p,
          a: paciente.a,
          c: paciente.c,
        };

        insertGpacTable(gpacDb);
      }

      const viviendaDb = {
        pacienteId: id,
        habitan: paciente.habitaCasa,
        habitantes: paciente.habitantes,
        cuartos: paciente.habitaciones,
        tipo: paciente.construccionMaterial,
      };

      insertViviendaTable(viviendaDb);

      const alergiasDb = {
        pacienteId: id,
        alergia: paciente.alergias,
      };

      insertAlergiaTable(alergiasDb);

      if (paciente.servicios.length === 0) {
        servicios = ["Ninguno"];
      }

      insertServiciosTable(paciente.servicios, id);
    }
  } catch (error) {
    console.log(error);
  }
}



function axiosPost(url, params) {
  axios
    .post(url, null, { params: params })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}




export function generarId(nombre, apellidoMat, apellidoPat, fechaNacimiento) {


  const fecha = new Date(fechaNacimiento);

  // Obtener el día, mes y año de la fecha
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Los meses en Date van de 0 a 11, por eso sumamos 1
  const anio = fecha.getFullYear();

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

function insertDireccionTable(datos) {
  const url = `http://localhost:8080/api/v1/direccion/${datos.pacienteId}`;
  const params = {
    calle: datos.calle,
    colonia: datos.colonia,
    codigo: datos.codigo,
    casa: datos.casa,
    originario: datos.originario,
    residencia: datos.residencia,
  };

  axiosPost(url, params);
}

function insertNoPatologicosTable(datos) {
  const url = `http://localhost:8080/api/v1/ancedentesNoPatologicos/${datos.pacienteId}`;
  const params = {
    lengua: datos.lengua,
    zoonosis: datos.zoonosis,
    transfusion: datos.transfusion,
    ocupacion: datos.ocupacion,
    religion: datos.religion,
    sangre: datos.sangre,
    estadoCivil: datos.estadoCivil,
    escolaridad: datos.escolaridad,
  };

  axiosPost(url, params);
}

function insertAlimentacionTable(datos) {
  const url = `http://localhost:8080/api/v1/alimentacion/${datos.pacienteId}`;
  const params = {
    comidas: datos.comidas,
    agua: datos.agua,
  };

  axiosPost(url, params);
}

function insertAntecedentesPatologicosTable(datos) {
  const url = `http://localhost:8080/api/v1/antecedentesPatologicos/${datos.pacienteId}`;
  const params = {
    covid: datos.covid,
    traumatismo: datos.traumatismo,
    hospitalizacion: datos.hospitalizacion,
    enfermedad: datos.enfermedad,
    cirugias: datos.cirugias,
  };

  axiosPost(url, params);
}

function insertGinecoObTable(datos) {
  const url = `http://localhost:8080/api/v1/gineco/${datos.pacienteId}`;
  const fecha = new Date(datos.fum);

  const dia = fecha.getDate();
  const mes = fecha.getMonth();
  const anio = fecha.getFullYear();

  console.log("Día: " + dia);
  console.log("Mes: " + mes);
  console.log("Año: " + anio);
  const params = {
    menarca: datos.menarca,
    ciclos: datos.ciclos,
    papanicolau: datos.papanicolau,
    mama: datos.mama,
    ivsa: datos.ivsa,
    mpf: datos.mpf,
    antecedentes: datos.antecedentes,
    anio: anio,
    mes: mes,
    dia: dia,
  };

  axiosPost(url, params);
}

function insertGpacTable(datos) {
  const url = `http://localhost:8080/api/v1/ginecoLetras/${datos.pacienteId}`;
  const params = {
    g: datos.g,
    p: datos.p,
    a: datos.a,
    c: datos.c,
  };

  axiosPost(url, params);
}

function insertViviendaTable(datos) {
  const url = `http://localhost:8080/api/v1/viviendas/${datos.pacienteId}`;
  const params = {
    habitan: datos.habitan,
    habitantes: datos.habitantes,
    cuartos: datos.cuartos,
    tipo: datos.tipo,
  };

  axiosPost(url, params);
}

function insertAlergiaTable(datos) {
  const url = `http://localhost:8080/api/v1/alergias/${datos.pacienteId}`;
  const params = {
    alergia: datos.alergia,
  };

  axiosPost(url, params);
}

function insertServiciosTable(servicios, id) {
  const serviciosData = servicios.filter(servicio => servicio !== "Zoonosis"); // Filtrar el servicio "Zoonosis" si existe

  const data = {
    pacienteId: id,
    servicios: serviciosData
  };

  axios.post(`http://localhost:8080/api/v1/servicios/${id}`, data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

    console.log(data);
}

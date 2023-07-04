import React from "react";
import "../App.css";
import Card from "./Card";
import deletePacient from "../assets/delete-pacient.png"
import addPacient from "../assets/pacient.png";
import consulta from "../assets/consulta.png";
import edit from "../assets/edit-pacient.png";
import SaveIcon from '@mui/icons-material/Save';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Home() {
  return (
    <>
      <div className="system-content">
        <div className="home-top">
        <Card title="Añadir un Paciente" img={addPacient} buttonText={"Añadir"} icon={<SaveIcon style={{fontSize:"1.4rem", marginTop:"-5px"}}></SaveIcon>}></Card>
        <Card title="Registrar Consulta" img={consulta} buttonText={"Registrar"} icon={<BookmarkAddIcon style={{fontSize:"1.4rem", marginTop:"-5px"}}></BookmarkAddIcon>}></Card>
        <Card title="Eliminar Paciente" img={deletePacient} buttonText={"Eliminar"} icon={<DeleteIcon style={{fontSize:"1.4rem", marginTop:"-5px"}}></DeleteIcon>}></Card>
        </div>

        <div className="home-top" style={{paddingTop:"12px"}}> 
        <Card title="Modificar un Paciente" img={edit} buttonText={"Modificar"} icon={<EditIcon style={{fontSize:"1.4rem", marginTop:"-5px"}}></EditIcon>}></Card>
        </div>
        
      </div>
    </>
  );
}

export default Home;
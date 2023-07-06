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

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>


    </>
    
  );
}

export default Home;

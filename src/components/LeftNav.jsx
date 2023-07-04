import "../App.css";
import { Search } from "@mui/icons-material";
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import HistoryIcon from '@mui/icons-material/History';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import cell from "../assets/cells.svg";


function LeftNav() {
  return (
    <>
    <div className="left-nav">

        <div className="nav-box">
            <Search style={{fontSize:"2.5rem"}}></Search>
            <p>Búsqueda</p>
        </div>

        <div className="nav-box">
            <img src={cell} alt="" style={{width:"3.5vw"}}/> 
            <p>Registro de Pacientes</p>
        </div>

        <div className="nav-box">
            <FolderOpenOutlinedIcon style={{fontSize:"2.5rem"}}></FolderOpenOutlinedIcon>
            <p>Archivos</p>
        </div>

        <div className="nav-box">
            <HistoryIcon style={{fontSize:"2.5rem"}}></HistoryIcon>
            <p>Consultas</p>
        </div>


        <div className="nav-box">
            <AddCircleOutlineOutlinedIcon style={{fontSize:"2.5rem"}}></AddCircleOutlineOutlinedIcon>
            <p>Agregar Documento</p>
        </div>
    </div>
    </>
  );
}

export default LeftNav;

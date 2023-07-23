import "../App.css";
import HomeIcon from '@mui/icons-material/Home';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import HistoryIcon from '@mui/icons-material/History';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import cell from "../assets/cells.svg";
import { useNavigate } from "react-router-dom";

function LeftNav() {
    const navigate = useNavigate();

  return (
    <>
    <div className="left-nav sticky-top">

        <div className="nav-box" onClick={()=> navigate('/')}>
            <HomeIcon style={{fontSize:"2.5rem"}}></HomeIcon>
            <p>Inicio</p>
        </div>

        <div className="nav-box" onClick={() => navigate('/pacient-search')}>
            <img src={cell} alt="" style={{width:"3.5vw"}}/> 
            <p>Registro de Pacientes</p>
        </div>

        <div className="nav-box" onClick={()=> navigate('/')}>
            <FolderOpenOutlinedIcon style={{fontSize:"2.5rem"}}></FolderOpenOutlinedIcon>
            <p>Archivos</p>
        </div>

        <div className="nav-box" onClick={() => navigate('/history-dates')}>
            <HistoryIcon style={{fontSize:"2.5rem"}}></HistoryIcon>
            <p>Consultas</p>
        </div>


        <div className="nav-box" on onClick={()=> navigate('/upload-file')}>
            <AddCircleOutlineOutlinedIcon style={{fontSize:"2.5rem"}}></AddCircleOutlineOutlinedIcon>
            <p>Agregar Documento</p>
        </div>
    </div>
    </>
  );
}

export default LeftNav;

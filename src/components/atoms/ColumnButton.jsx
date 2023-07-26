import "../../styles/atoms.css";
import {useNavigate} from "react-router-dom";

export default function ColumnButton(props) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(props.to);
    };
    return (
    <>
      <button
        type="button"
        class="btn btn-secondary btn-sm "
        style={{ background: props.color }}
        onClick={handleClick}
        data-bs-target={props.abrir}
        data-bs-toggle="modal" 
        data-bs-dismiss="modal"
      >
        {props.text}
      </button>
    </>
  );
}

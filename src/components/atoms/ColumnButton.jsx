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
        class="btn btn-secondary btn-sm column-btn"
        style={{ background: props.color }}
        onClick={handleClick}
      >
        {props.text}
      </button>
    </>
  );
}

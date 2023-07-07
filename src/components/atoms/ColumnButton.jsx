import "../../styles/atoms.css";

export default function ColumnButton(props) {
  return (
    <>
      <button
        type="button"
        class="btn btn-secondary btn-sm column-btn"
        style={{ background: props.color }}
      >
        {props.text}
      </button>
    </>
  );
}

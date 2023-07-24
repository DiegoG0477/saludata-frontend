import "../../styles/atoms.css";

export default function NextButton(props) {
  return (
    <>
      <button
        type="button"
        class="btn globalButton"
        // data-bs-target="{#staticBackdrop4}"
        data-bs-target={props.page}
        data-bs-toggle="modal"
        data-bs-dismiss="modal"
      >
        Siguiente
      </button>
    </>
  );
}

export default function CollapseButton(props) {
  return (
    <>
      <div className="dropdown-center">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Centered dropdown
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Action two
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Action three
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

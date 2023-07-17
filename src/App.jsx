import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Render from "./Render";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PacientSearch from "./components/PacientSearch";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import PacientSummary from "./components/pages/PacientSummary";

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router>
          <Routes>
            <Route path="/" element={<Render component={<Home />} />} />
            <Route
              path="pacient-search"
              element={
                <Render
                  component={
                    <PacientSearch
                      title="Registro de Pacientes"
                      text=" Ingrese los datos de un paciente para su búsqueda o revise el registro
                      general de pacientes"
                      ancho={78}
                      labelAncho={36}
                      color="#248087"
                      botonText="Ver más"
                      anchoPicker="36"
                      mover={0}
                    />
                  }
                />
              }
            />
            <Route
              path="pacient-summary"
              element= {<Render component={<PacientSummary />} />}
            />
          </Routes>
        </Router>
      </LocalizationProvider>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Render from "./Render";
import Home from "./components/Home";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import PacientSearch from "./components/PacientSearch";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Router>
        <Routes>
          <Route path="/" element={<Render component={<Home />} />} />
          <Route
            path="pacient-search"
            element={<Render component={<PacientSearch />} />}
          />
        </Routes>
      </Router>
      </LocalizationProvider>
    </>
  );
}

export default App;

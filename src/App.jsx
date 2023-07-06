import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Render from "./Render";
import Home from "./components/Home";
import PacientSearch from "./components/PacientSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Render component={<Home />} />} />
        <Route
          path="pacient-search"
          element={<Render component={<PacientSearch />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

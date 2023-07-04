import "./App.css";
import "primeicons/primeicons.css";
import Head from "./components/Head";
import LeftNav from "./components/LeftNav";
import Home from "./components/Home";

function Render({ component }) {
  return (
    <>
      <Head></Head>
      <div className="app">
        <div className="frame">
          <LeftNav></LeftNav>
          {component}
        </div>
      </div>
    </>
  );
}

export default Render;

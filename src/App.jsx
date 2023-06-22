import "./App.css";
import logo from "./assets/mini-logo4.png";
import "primeicons/primeicons.css";
import Head from "./components/Head";
import LeftNav from "./components/LeftNav";
import Body from "./components/Body";

function App() {
  return (
    <>
      <div className="app">
        <Head></Head>
        <div className="frame">
          <LeftNav></LeftNav>
          <Body></Body>
        </div>
      </div>
    </>
  );
}

export default App;

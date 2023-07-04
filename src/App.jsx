import "./App.css";
import "primeicons/primeicons.css";
import Head from "./components/Head";
import LeftNav from "./components/LeftNav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="app">
        <Head></Head>
        <div className="frame">
          <LeftNav></LeftNav>
          <Home></Home>
        </div>
      </div>
    </>
  );
}

export default App;

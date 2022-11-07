import "./App.css";
import kangLiu from "./assets/revenant_kang_liu_1.png";
import ClickBait from "../src/components/ClickBait";
import GetNames from "./components/GetNames";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="vite" alt="Vite logo" />
          </a>
          <a
            href="https://kenganverse.fandom.com/wiki/Kengan_Ashura_(manga)"
            target="_blank"
          >
            <img src={kangLiu} className="logo" alt="React logo" />
          </a>
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <ClickBait />
      <GetNames />
    </>
  );
}

export default App;

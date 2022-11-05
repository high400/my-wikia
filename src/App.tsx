import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import vearn from "./assets/dark-king-vearn.png";
import kangLiu from "./assets/revenant_kang_liu_1.png";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="vite" alt="Vite logo" />
          </a>
          <a href="https://kenganverse.fandom.com/wiki/Kengan_Ashura_(manga)" target="_blank">
            <img src={kangLiu} className="logo" alt="React logo" />
          </a>
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setNumber((number) => number - 1)}>
          number is {number}
        </button>
      </div>
      <div className="typography">
      <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;

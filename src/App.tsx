import "./App.css";
import Header from "./components/Header";
import ClickBait from "../src/components/ClickBait";
import GetNames from "./components/GetNames";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <ClickBait />
        <GetNames />
        <Footer />
      </div>
    </>
  );
}

export default App;

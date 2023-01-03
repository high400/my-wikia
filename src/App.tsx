import "./App.css";
import Header from "./components/Header";
import GetNames from "./components/GetNames";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header title="Lists of mangas I hate(and love) to read" />
        {/* Fixed it in "Header.tsx". Check the file to know more  */}
        <GetNames />
        <Footer />
      </div>
    </>
  );
}

export default App;

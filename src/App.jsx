import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Output from "./pages/Output";

function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-dunyanin-en-guzel-kizi" element={<Output />} />
      </Routes>
    </div>
  );
}

export default App;

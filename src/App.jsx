import { Link, Route, Routes } from "react-router-dom";
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

      <div className="absolute bottom-0 w-full bg-gray-200">
        <p className="text-center">
          created by{" "}
          <a
            href="https://github.com/ilker09091"
            target="_blank"
            rel="noopener noreferrer "
            className="text-bold "
          >
            ilkerdeveloper
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

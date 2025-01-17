import "bootstrap/dist/css/bootstrap.min.css";
import MeteoNavbar from "./components/MeteoNavbar";
import MeteoHome from "./components/MeteoHome";
import MeteoSearch from "./components/MeteoSearch"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MeteoNavbar />
      <Routes>
        <Route path="/" element={<MeteoHome/>} />
        <Route path="/search" element={<MeteoSearch/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

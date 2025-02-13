import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Login from "./pages/login"; // Importa la página de login
import Home from "./home"; // Importa la página principal

function App() {
  return (
    <>
      <Navbar /> {/* Navbar se mostrará en todas las páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

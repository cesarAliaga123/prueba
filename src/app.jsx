import { Routes, Route } from "react-router-dom";
import Login from "./pages/login"; // Importa la página de login
import Home from "./home"; // Importa la página principal
import Register from "./pages/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

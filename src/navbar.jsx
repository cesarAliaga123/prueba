import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white relative">
      {/* Contenedor principal */}
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}


        <div className="flex justify-center items-center w-full h-auto">
  <img src="/logo2.png" alt="Logo" className="w-96 h-32" />
</div>


        {/* Botón de login */}
        <div>
          <a href="/login">
            <FaUser className="text-3xl text-gray-800 hover:text-gray-500" />
          </a>
        </div>
      </div>

      {/* Menú de navegación */}
      <div className="bg-rose-800 py-3">
        <ul className="flex justify-center space-x-8">
        

        <li>
          <Link to="/" className="text-white text-xl hover:text-gray-200 font-merriweather">
             Inicio
          </Link>
          </li>

          <li>
            <a href="#about" className="text-white text-xl hover:text-gray-200 font-merriweather">La Cámara</a>
          </li>
          <li>
            <a href="#services" className="text-white text-xl hover:text-gray-200 font-merriweather">Actividades</a>
          </li>
          <li>
            <a href="#contact" className="text-white text-xl hover:text-gray-200 font-merriweather">Socios</a>
          </li>
          <li>
            <a href="#contact" className="text-white text-xl hover:text-gray-200 font-merriweather">España - Bolivia</a>
          </li>
          <li>
            <a href="#contact" className="text-white text-xl hover:text-gray-200 font-merriweather">Contáctenos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

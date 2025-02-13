import React from 'react';

function Navbar() {
  return (
    <nav className=" bg-white">
      {/* Contenedor principal del navbar */}
      <div className="flex flex-col items-center">
        {/* Logo centrado */}
        <div className="mb-6">
          <img src="/logo2.png" alt="Logo" className=" w-96 h-32" />
        </div>
      </div>
      <div className="flex flex-col items-center bg-rose-800 py-3">
        {/* Opciones de navegación */}
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="text-white text-xl hover:text-gray-200 font-merriweather">Inicio</a>
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

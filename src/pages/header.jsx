import React from "react";

function HeaderD() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center shadow-md">
      {/* Logo a la izquierda */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />

      </div>

      {/* Nombre del usuario y botón de logout a la derecha */}
      <div className="flex items-center space-x-4">
        <span className="text-lg">Hola, <strong>Usuario</strong></span>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
          Logout
        </button>
      </div>
    </header>
  );
}

export default HeaderD;

import React, { useState } from "react";
import { Home, BarChart, Users, Settings, LogOut, Menu } from "lucide-react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-gray-900 text-white ${
        collapsed ? "w-20" : "w-64"
      } h-screen p-5 flex flex-col shadow-lg transition-all duration-300 overflow-hidden`}
    >
      {/* Botón para colapsar/expandir */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="text-white p-2 hover:bg-gray-700 rounded mb-4 self-start"
      >
        <Menu />
      </button>

      {/* Contenedor principal para empujar "Ajustes" abajo */}
      <div className="flex flex-col flex-grow">
        {/* Sección Principal */}
        <div className="mb-6">
          <h2 className={`text-lg font-semibold ${collapsed ? "hidden" : "block"}`}>
            Principal
          </h2>
          <nav>
            {!collapsed && (
              <>
                <button className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded w-full">
                  <Home size={20} /> Inicio
                </button>
                <button className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded w-full">
                  <BarChart size={20} /> Personalizar
                </button>
                <button className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded w-full">
                  <Users size={20} /> Socios
                </button>
                <button className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded w-full">
                  <BarChart size={20} /> Reportes
                </button>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Sección de Ajustes (Empujada al final) */}
      {!collapsed && (
        <div>
          <h2 className="text-lg font-semibold">Ajustes</h2>
          <nav>
            <button className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded w-full">
                  <Users size={20} /> Perfil
                </button>
            <button className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded w-full">
              <Settings size={20} /> Configuración
            </button>
            <button className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded w-full">
              <LogOut size={20} /> Cerrar sesión
            </button>
          </nav>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;

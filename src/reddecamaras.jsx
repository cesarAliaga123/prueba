import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const RedDeCamaras = () => {
    const [camaras, setCamaras] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:5000/camaras")
        .then((res) => setCamaras(res.data))
        .catch((err) => console.error("Error cargando cámaras de comercio:", err));
    }, []);

    return (
    <div className="p-8">
        <h2 className="text-3xl font-bold text-center font-merriweather text-rose-800 pb-6">
        Red de Cámaras de Comercio en Bolivia
        </h2>
        <div className="w-full h-[500px]">
        <MapContainer 
        center={[-17.0, -64.0]} 
            zoom={4} 
             minZoom={3} // 👈 Establece un zoom mínimo para evitar que se vean múltiples mundos
            maxZoom={18} // 👈 Define un zoom máximo opcional
            className="w-full h-full"
            worldCopyJump={false} // Evita la repetición del mapa
            maxBounds={[
    [-85, -180], // Extremo suroeste
    [85, 180] // Extremo noreste
    ]}
  maxBoundsViscosity={1.0} // Restringe el zoom fuera de los límites
        >
          {/* Capa base del mapa */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Marcadores con Popup */}
            {camaras.map((camara) => (
            <Marker key={camara.id} position={[camara.lat, camara.lng]}>
                <Popup>
                <div className="text-center">
                    <h3 className="font-bold text-lg">{camara.name}</h3>
                    <button
                    onClick={() => window.open(camara.link, "_blank")}
                    className="mt-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                    Ir a la Página
                    </button>
                </div>
                </Popup>
            </Marker>
            ))}
        </MapContainer>
        </div>
    </div>
    );
};

export default RedDeCamaras;

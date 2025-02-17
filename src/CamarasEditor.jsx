import React, { useEffect, useState } from "react";
import axios from "axios";

const CamarasEditor = () => {
  const [camaras, setCamaras] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    lat: "",
    lng: "",
    link: ""
  });

  useEffect(() => {
    axios.get("http://localhost:5000/camaras")
      .then((res) => setCamaras(res.data))
      .catch((err) => console.error("Error cargando cámaras:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/camaras", formData)
      .then(() => window.location.reload())
      .catch((err) => console.error("Error agregando cámara:", err));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Agregar Nueva Cámara</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Nombre" className="w-full p-2 border" onChange={handleChange}/>
        <input type="text" name="lat" placeholder="Latitud" className="w-full p-2 border" onChange={handleChange}/>
        <input type="text" name="lng" placeholder="Longitud" className="w-full p-2 border" onChange={handleChange}/>
        <input type="text" name="link" placeholder="Enlace" className="w-full p-2 border" onChange={handleChange}/>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Guardar</button>
      </form>
    </div>
  );
};

export default CamarasEditor;

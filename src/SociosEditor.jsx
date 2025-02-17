import React, { useEffect, useState } from "react";
import axios from "axios";

const SociosEditor = () => {
  const [socios, setSocios] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    axios.get("http://localhost:5000/socios")
      .then((res) => setSocios(res.data))
      .catch((err) => console.error("Error cargando socios:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/socios", formData)
      .then(() => window.location.reload())
      .catch((err) => console.error("Error agregando socio:", err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/socios/${id}`)
      .then(() => window.location.reload())
      .catch((err) => console.error("Error eliminando socio:", err));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Socio</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Nombre del socio" className="w-full p-2 border" onChange={handleChange}/>
        <input type="text" name="description" placeholder="Descripción" className="w-full p-2 border" onChange={handleChange}/>
        <input type="text" name="image" placeholder="URL de la imagen" className="w-full p-2 border" onChange={handleChange}/>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Guardar</button>
      </form>

      <h2 className="text-2xl font-bold mt-8">Lista de Socios</h2>
      {socios.map((socio) => (
        <div key={socio.id} className="flex justify-between p-2 border">
          <span>{socio.title}</span>
          <button onClick={() => handleDelete(socio.id)} className="bg-red-500 text-white p-2 rounded">Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default SociosEditor;

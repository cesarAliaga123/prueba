import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutEditor = () => {
  const [about, setAbout] = useState({
    id: 1, // ID del About en la BD
    title: "",
    description: "",
    button_text: "",
    button_link: "",
    image_url: ""
  });

  useEffect(() => {
    axios.get("http://localhost:5000/about")
      .then((res) => setAbout(res.data))
      .catch((err) => console.error("Error cargando About:", err));
  }, []);

  const handleChange = (e) => {
    setAbout({ ...about, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/about/${about.id}`, about)
      .then(() => alert("Sección actualizada correctamente"))
      .catch((err) => console.error("Error actualizando About:", err));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Editar Sección "¿Quiénes Somos?"</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" value={about.title} onChange={handleChange} placeholder="Título" className="w-full p-2 border"/>
        <textarea name="description" value={about.description} onChange={handleChange} placeholder="Descripción" className="w-full p-2 border"></textarea>
        <input type="text" name="button_text" value={about.button_text} onChange={handleChange} placeholder="Texto del botón" className="w-full p-2 border"/>
        <input type="text" name="button_link" value={about.button_link} onChange={handleChange} placeholder="Enlace del botón" className="w-full p-2 border"/>
        <input type="text" name="image_url" value={about.image_url} onChange={handleChange} placeholder="URL de la imagen" className="w-full p-2 border"/>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default AboutEditor;

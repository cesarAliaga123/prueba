import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState({
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

  return (
    <div className="flex justify-center items-center py-20 bg-rose-800">
      <div className="relative bg-white shadow-xl max-w-7xl flex flex-col md:flex-row items-center overflow-hidden">
        {/* Contenedor del texto */}
        <div className="w-full md:w-1/2 p-8 md:p-10 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-rose-800 font-merriweather">
            {about.title}
          </h2>
          <p 
            className="text-lg text-gray-600 mb-6 font-merriweather whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: about.description.replace(/\\n/g, "<br/>") }}
          ></p>
          <a
            href={about.button_link}
            className="bg-rose-800 hover:bg-rose-900 text-white font-bold py-3 px-4 transition font-merriweather"
          >
            {about.button_text}
          </a>
        </div>

        {/* Imagen con filtro oscuro */}
        <div className="relative w-full h-full md:w-1/2 md:h-auto">
          <img
            src={about.image_url}
            alt="Nosotros"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-5"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

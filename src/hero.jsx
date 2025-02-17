import React, { useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {
  const [hero, setHero] = useState({
    background_image: "",
    title: "",
    button_text: "",
    button_link: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/hero")
      .then((res) => setHero(res.data))
      .catch((err) => console.error("Error cargando el Hero:", err));
  }, []);

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${hero.background_image})` }}
    >
      <div className="text-center bg-black bg-opacity-50 p-16">
      <h1
  className="text-5xl font-bold mb-4 font-merriweather py-3"
  dangerouslySetInnerHTML={{ __html: hero.title.replace(/\\n/g, "<br/>") }}
></h1>


        <a
          href={hero.button_link}
          className="bg-rose-800 hover:bg-rose-900 text-white font-bold py-3 px-4 font-merriweather text-2xl"
        >
          {hero.button_text}
        </a>
      </div>
    </div>
  );
};

export default Hero;

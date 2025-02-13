const About = () => {
  return (
    <div
      className="flex justify-center items-center py-20 bg-rose-800"
    >
      <div className="relative bg-white shadow-xl max-w-7xl flex flex-col md:flex-row items-center overflow-hidden">
        {/* Contenedor del texto */}
        <div className="w-full md:w-1/2 p-8 md:p-10 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-rose-800 font-merriweather">¿Quiénes somos?</h2>
          <p className="text-lg text-gray-600 mb-6 font-merriweather">
          La Cámara de Comercio de España en Bolivia es una organización comprometida con el fortalecimiento de las relaciones comerciales entre España y Bolivia. 
          Buscamos promover y facilitar el comercio y la inversión entre ambos países, brindando asesoramiento, apoyo y servicios de calidad a las empresas españolas
            interesadas en hacer negocios en Bolivia.
          </p>
          <a
            href="/mas-informacion"
            className="bg-rose-800 hover:bg-rose-900 text-white font-bold py-3 px-4 transition font-merriweather"
          >
            Más Información
          </a>
        </div>

        {/* Imagen con filtro oscuro */}
        <div className="relative w-full h-full md:w-1/2 md:h-auto">
          <img
            src="/hands.jpg"
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

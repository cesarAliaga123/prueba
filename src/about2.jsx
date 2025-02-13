const About2 = () => {
    return (
      <div
        className="flex justify-center items-center py-20 bg-white"
      >
        <div className="relative bg-rose-800 rounded-lg shadow-xl max-w-7xl flex flex-col md:flex-row items-center overflow-hidden">
          {/* Imagen con filtro oscuro */}
          <div className="relative w-full h-full md:w-1/2 md:h-auto">
            <img
              src="/pass.jpg"
              alt="Nosotros"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-15"></div>
          </div>
          {/* Contenedor del texto */}
          <div className="w-full md:w-1/2 p-8 md:p-10 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 text-white font-merriweather">AFÍLIATE E INTERNACIONALIZA TU NEGOCIO </h2>
            <a
              href="/mas-informacion"
              className="bg-white hover:bg-rose-200 text-rose-800 font-bold py-3 px-5 rounded transition font-merriweather"
            >
              Afíliate
            </a>
          </div>
  
          
        </div>
      </div>
    );
  };
  
  export default About2;
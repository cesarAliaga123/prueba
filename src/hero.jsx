const Hero = () => {
    return (
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/spain.jpg')" }}
      >
        <div className="text-center bg-black bg-opacity-50 p-16">
          <h1 className="text-5xl font-bold mb-4 font-merriweather py-3">Cámara Oficial Española  <br /> De Comercio E Industria En Bolivia</h1>
          <a
            href="/otra-pagina"
            className="bg-rose-800 hover:bg-rose-900 text-white font-bold py-3 px-4 font-merriweather text-2xl"
          >
            Afíliate
          </a>
        </div>
      </div>
    );
  };
  
  export default Hero;
  
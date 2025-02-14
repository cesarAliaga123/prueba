import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reiniciar mensaje de error

    try {
      const res = await axios.post("http://localhost:5000/login", formData);
      localStorage.setItem("token", res.data.token); // Guardar token en localStorage
      alert("Inicio de sesión exitoso");
      navigate("/admin"); // Redirigir al usuario a la página principal
    } catch (error) {
      setError(error.response?.data?.message || "Error en el login");
    }
  };

  return (
    <section className="min-h-screen flex items-stretch text-white">
      {/* Sección izquierda con imagen */}
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            "url(./spain.jpg)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>

        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold tracking-wide font-merriweather text-right">
            Cámara Oficial Española De Comercio E Industria en Bolivia
          </h1>
        </div>

      </div>
      

      {/* Sección derecha con el formulario */}
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 bg-rose-800">
        <div className="w-full py-6 z-20">


          <h1 className="my-6 text-4xl font-bold text-white font-merriweather">Iniciar Sesión</h1>


          {/* Formulario */}
          <form onSubmit={handleSubmit} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            {/* Campo Email */}
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="block w-full p-4 text-lg rounded-br-xl rounded-tl-xl bg-white border border-rose-950 font-merriweather text-rose-950"
              />
            </div>

            {/* Campo n*/}
            <div className="pb-2 pt-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="llock w-full p-4 text-lg rounded-br-xl rounded-tl-xl bg-white border border-rose-950 font-merriweather text-rose-950"
              />
            </div>


            {/* Recordar Contraseña y Olvidar Contraseña */}
            <div className="flex justify-between text-rose-400 py-2 text-sm">

              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-5 h-5 border-2 border-rose-400 rounded-full flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
                  <svg
                    className="w-4 h-4 text-rose-300 hidden peer-checked:block"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span className="ml-2 hover:text-rose-200 font-merriweather">Recuérdame</span>
              </label>
              <Link to="/forgot-password" className="hover:text-rose-200 font-merriweather">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            {/* Botón de Enviar */}
            <div className="px-4 pb-2 pt-4">
              <button
                type="submit" 
                className="uppercase block w-full p-4 text-lg rounded-br-xl rounded-tl-xl bg-white hover:bg-rose-300 focus:outline-none text-rose-900 font-merriweather"
              >
                Ingresar
              </button>
              <div className="pt-3">
              <Link to="/register" className="text-rose-400 hover:text-rose-200 font-merriweather">
                ¿No tienes cuenta? Regístrate.
              </Link>
              </div>
            </div>
             {/* Redes Sociales */}
             <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-4">
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white cursor-pointer">
                f
              </span>
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white cursor-pointer">
                G+
              </span>
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white cursor-pointer">
                in
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;

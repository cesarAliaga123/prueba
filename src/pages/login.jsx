import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí puedes agregar lógica para autenticar al usuario
  };

  return (
    <section className="min-h-screen flex items-stretch text-white">
      {/* Sección izquierda con imagen */}
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Keep it special
          </h1>
          <p className="text-3xl my-4">
            Capture your personal memori in a unique way, anywhere.
          </p>
        </div>
      </div>

      {/* Sección derecha con el formulario */}
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 bg-gray-900">
        <div className="w-full py-6 z-20">
          <h1 className="my-6 text-4xl font-bold text-white">Logearte</h1>

          <p className="text-gray-400">or use your email account</p>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
          >
            {/* Campo Email */}
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="block w-full p-4 text-lg rounded-sm bg-black border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Campo Contraseña */}
            <div className="pb-2 pt-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="block w-full p-4 text-lg rounded-sm bg-black border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Recordar Contraseña y Olvidar Contraseña */}
            <div className="flex justify-between text-gray-400 py-2 text-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center peer-checked:bg-indigo-500 peer-checked:border-indigo-500">
                  <svg
                    className="w-4 h-4 text-white hidden peer-checked:block"
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
                <span className="ml-2">Recuérdame</span>
              </label>
              <Link to="/forgot-password" className="hover:text-gray-200">
                Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Botón de Enviar */}
            <div className="px-4 pb-2 pt-4">
              <button
                type="submit"
                className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
              >
                Sign In
              </button>
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

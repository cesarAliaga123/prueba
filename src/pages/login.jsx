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
      navigate("/home"); // Redirigir al usuario a la página principal
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
            "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      </div>

      {/* Sección derecha con el formulario */}
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 bg-gray-900">
        <div className="w-full py-6 z-20">
          <h1 className="my-6 text-4xl font-bold text-white">Logearte</h1>

          {error && <p className="text-red-500">{error}</p>}

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
                className="block w-full p-4 text-lg rounded-sm bg-black border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
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
                className="block w-full p-4 text-lg rounded-sm bg-black border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
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
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;

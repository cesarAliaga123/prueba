import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de registro:", formData);
    // Aquí puedes agregar lógica para registrar al usuario
  };

  return (
    <section className="min-h-screen flex items-stretch text-white">
      {/* Sección izquierda con formulario */}
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 bg-rose-800">
        <div className="w-full py-6 z-20">
          <h1 className="my-6 text-4xl font-bold text-white font-merriweather">Registro</h1>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
          >
            {/* Campo Nombre */}
            <div className="pb-2 pt-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
                required
                className="block w-full p-4 text-lg rounded-br-xl rounded-tl-xl bg-white border border-rose-950 font-merriweather text-rose-950"
              />
            </div>

            {/* Campo Email */}
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo"
                required
                className="block w-full p-4 text-lg rounded-br-xl rounded-tl-xl bg-white border border-rose-950 font-merriweather text-rose-950"
              />
            </div>

            {/* Campo Contraseña */}
            <div className="pb-2 pt-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                required
                className="block w-full p-4 text-lg rounded-br-xl rounded-tl-xl bg-white border border-rose-950 font-merriweather text-rose-950"
              />
            </div>

            {/* Botón de Registro */}
            <div className="px-4 pb-2 pt-4">
              <button
                type="submit"
                className="uppercase block w-full p-4 text-lg rounded-br-xl rounded-tl-xl bg-white hover:bg-rose-300 focus:outline-none text-rose-900 font-merriweather"
              >
                Registrarse
              </button>
            </div>

            {/* Enlace para iniciar sesión */}
            <p className="mt-4 text-sm text-rose-300 font-merriweather">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="text-white font-bold hover:underline font-merriweather">
                Inicia sesión aquí
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Sección derecha con imagen */}
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage: "url(./spain.jpg)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold tracking-wide font-merriweather text-left">
            Cámara Oficial Española De Comercio E Industria en Bolivia
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Register;

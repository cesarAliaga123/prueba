require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

// **Conexión a PostgreSQL**
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// **Ruta de prueba**
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente.");
});

// **Registro de usuario (crea una cuenta y hashea la contraseña)**
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const userExists = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ success: false, message: "El usuario ya existe" });
    }

    // Hashear la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO usuarios (email, password) VALUES ($1, $2) RETURNING *",
      [email, hashedPassword]
    );

    res.json({ success: true, user: { id: result.rows[0].id, email: result.rows[0].email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error al registrar usuario" });
  }
});

// **Login de usuario**
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
      if (result.rows.length === 0) {
        return res.status(400).json({ success: false, message: "Usuario no encontrado" });
      }
  
      const user = result.rows[0];
  
      // **Imprimir contraseñas para depuración**
      console.log("🔍 Contraseña ingresada:", password);
      console.log("🔍 Contraseña en BD:", user.password);
  
      // **Comparar directamente sin bcrypt**
      if (password !== user.password) {
        console.log("❌ Contraseña incorrecta");
        return res.status(400).json({ success: false, message: "Contraseña incorrecta" });
      }
  
      console.log("✅ Contraseña correcta");
  
      // **Generar Token JWT**
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
      res.json({ success: true, token, user: { id: user.id, email: user.email } });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error en el servidor" });
    }
  });
  

// **Ruta protegida para obtener datos del usuario (verifica el token)**
app.get("/profile", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Acceso denegado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await pool.query("SELECT id, email FROM usuarios WHERE id = $1", [decoded.id]);

    res.json({ success: true, user: user.rows[0] });
  } catch (error) {
    res.status(403).json({ success: false, message: "Token inválido" });
  }
});

// **Iniciar Servidor**
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

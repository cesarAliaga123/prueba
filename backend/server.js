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


// Obtener el contenido del Hero
app.get("/hero", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM hero LIMIT 1");
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error obteniendo el Hero:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Actualizar el contenido del Hero
app.put("/hero/:id", async (req, res) => {
  const { id } = req.params;
  const { background_image, title, button_text, button_link } = req.body;

  try {
    await pool.query(
      "UPDATE hero SET background_image = $1, title = $2, button_text = $3, button_link = $4 WHERE id = $5",
      [background_image, title, button_text, button_link, id]
    );

    res.json({ success: true, message: "Hero actualizado correctamente" });
  } catch (error) {
    console.error("Error actualizando el Hero:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Obtener datos de la sección "¿Quiénes Somos?"
app.get("/about", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM about LIMIT 1");
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error obteniendo la información de About:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Actualizar datos de la sección "¿Quiénes Somos?"
app.put("/about/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, button_text, button_link, image_url } = req.body;

  try {
    await pool.query(
      "UPDATE about SET title = $1, description = $2, button_text = $3, button_link = $4, image_url = $5 WHERE id = $6",
      [title, description, button_text, button_link, image_url, id]
    );
    res.json({ success: true, message: "Sección About actualizada correctamente" });
  } catch (error) {
    console.error("Error actualizando About:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});


// Obtener todas las noticias
app.get("/news", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM news ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error obteniendo noticias:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Agregar una nueva noticia
app.post("/news", async (req, res) => {
  const { title, description, image_url } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO news (title, description, image_url) VALUES ($1, $2, $3) RETURNING *",
      [title, description, image_url]
    );
    res.json({ success: true, news: result.rows[0] });
  } catch (error) {
    console.error("Error agregando noticia:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Actualizar una noticia
app.put("/news/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, image_url } = req.body;
  try {
    await pool.query(
      "UPDATE news SET title = $1, description = $2, image_url = $3 WHERE id = $4",
      [title, description, image_url, id]
    );
    res.json({ success: true, message: "Noticia actualizada correctamente" });
  } catch (error) {
    console.error("Error actualizando noticia:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Eliminar una noticia
app.delete("/news/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM news WHERE id = $1", [id]);
    res.json({ success: true, message: "Noticia eliminada correctamente" });
  } catch (error) {
    console.error("Error eliminando noticia:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});







// Obtener todas las cámaras de comercio
app.get("/camaras", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM camaras ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error obteniendo cámaras de comercio:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Agregar una nueva cámara de comercio
app.post("/camaras", async (req, res) => {
  const { name, lat, lng, link } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO camaras (name, lat, lng, link) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, lat, lng, link]
    );
    res.json({ success: true, camara: result.rows[0] });
  } catch (error) {
    console.error("Error agregando cámara:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Actualizar una cámara de comercio
app.put("/camaras/:id", async (req, res) => {
  const { id } = req.params;
  const { name, lat, lng, link } = req.body;
  try {
    await pool.query(
      "UPDATE camaras SET name = $1, lat = $2, lng = $3, link = $4 WHERE id = $5",
      [name, lat, lng, link, id]
    );
    res.json({ success: true, message: "Cámara actualizada correctamente" });
  } catch (error) {
    console.error("Error actualizando cámara:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Eliminar una cámara de comercio
app.delete("/camaras/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM camaras WHERE id = $1", [id]);
    res.json({ success: true, message: "Cámara eliminada correctamente" });
  } catch (error) {
    console.error("Error eliminando cámara:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});








// Obtener todos los socios
app.get("/socios", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM socios ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error obteniendo socios:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Agregar un nuevo socio
app.post("/socios", async (req, res) => {
  const { title, description, image } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO socios (title, description, image) VALUES ($1, $2, $3) RETURNING *",
      [title, description, image]
    );
    res.json({ success: true, socio: result.rows[0] });
  } catch (error) {
    console.error("Error agregando socio:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Eliminar un socio
app.delete("/socios/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM socios WHERE id = $1", [id]);
    res.json({ success: true, message: "Socio eliminado correctamente" });
  } catch (error) {
    console.error("Error eliminando socio:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = 3000; // Puerto donde correrá la app
const pool = new Pool({
    user: 'postgres',          // Usuario de PostgreSQL
    host: 'localhost',           // Host de la base de datos
    database: 'empresa',     // Nombre de la base de datos
    password: 'Martin76.',   // Contraseña de PostgreSQL
    port: 5432,                  // Puerto por defecto de PostgreSQL
});
pool.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
    } else {
      console.log('Conexión exitosa a PostgreSQL');
    }
  });
  app.get('/empleados', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM empleados'); // Cambia "empleados" por el nombre exacto de tu tabla
      res.json(result.rows); // Devolver los datos como JSON
    } catch (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error en el servidor');
    }
  });
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
  

const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 3000; 
const pool = new Pool({
    user: 'postgres',         
    host: 'localhost',          
    database: 'empresa',     
    password: 'Martin76.',   
    port: 5432,                  
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
      const result = await pool.query('SELECT * FROM empleados'); 
    } catch (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error en el servidor');
    }
  });

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
  

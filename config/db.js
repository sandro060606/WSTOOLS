const mysql = require('mysql2/promise') //Acceso Motor BD
require("dotenv").config() //Acceso al Archivo .env

//Pool de conexiones => número definido de conexiones disponibles
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,   //ESPERAR PARA CONECTARSE
    connectionLimit: 10,        //LIMITE DE CONEXIONES
    queueLimit: 0,              //LIMITE DE ESPERA
    timezone: "-05:00"          //ZONA HORARIA DE PERU / INTERNACIONAL
});

//Inicializar la conexión a través de una funcion anónima
(async () => {
    try {
        const conexion = await pool.getConnection();
        console.log(`Conexión al server y MySQL correcto`);
        conexion.release()
    } catch (error) {
        console.error(`Error en la Conexión con MySQL: ${error.message}`)
    }
})();

module.exports = pool;
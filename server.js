//Es necesario desplegar / ejecutar la aplicacion
express = require("express");   //Framework
const cors = require("cors");   //Intercambio de recursos entre dominios (CORS)
require("dotenv").config();     //Variables de entorno

app = express();
const PORT = process.env.PORT || 3000;

//Middleware | Canales de comunicación
app.use(cors());
app.use(express.json());

//Rutas
app.use("/api/herramientas", require("./routes/herramientasRoutes"));

//Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

module.exports = app;
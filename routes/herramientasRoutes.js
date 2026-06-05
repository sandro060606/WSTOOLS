//Este archivo contendrá toda la lógica para operar con los datos -> DB
const express = require("express");
const router = express.Router();
const db = require("../config/db");

//Utilizando express (framwork JS) vamos a utilizar métodos de acceso
//localhost:3000/herramientas
//req = require = solicitud
//res = response = respuesta (JSON)

router.get("/", async (req, res) => {
  try {
    const query = "SELECT * FROM herramientas";

    //Deserializacion, el primer valor
    //El metodo query devuelve una MATRIZ
    //db.query = [[registros....], [info_query]]
    const [rows] = await db.query(query);

    //Devolvemos los datos obtenidos como JSON
    res.json({
      succes: true,
      data: rows,
    });
  } catch (err) {
    //¿Por que 500? Error generado del lado del servidor
    res.status(500).json({
      succes: false,
      message: "Error con la Comunicacíón al servidor",
      error: err.message,
    });
  }
});

//Registrar
router.post("/", async (req, res) => {
  try {
  } catch (err) {
    //¿Por que 500? Error generado del lado del servidor
    res.status(500).json({
      succes: false,
      message: "Error con la Comunicacíón al servidor",
      error: err.message,
    });
  }
});

//Editar
router.put("/", async (req, res) => {
  try {
  } catch (err) {
    //¿Por que 500? Error generado del lado del servidor
    res.status(500).json({
      succes: false,
      message: "Error con la Comunicacíón al servidor",
      error: err.message,
    });
  }
});

//Eliminar | Peligro OJO
router.delete("/", async (req, res) => {
  try {
  } catch (err) {
    //¿Por que 500? Error generado del lado del servidor
    res.status(500).json({
      succes: false,
      message: "Error con la Comunicacíón al servidor",
      error: err.message,
    });
  }
});

module.exports = router;
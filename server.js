const express = require('express');
const PORT = 3000;
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes/index");

// Importar los modelos
const models = require("./models/index");

// Conectar a la base de datos
mongoose.connect("mongodb+srv://lourdes:lisandro24@cluster0.5fmw8ta.mongodb.net/Plataforma_disco?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB:", err);
  });

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Pasar los modelos a las rutas
app.use((req, res, next) => {
  req.models = models;
  next();
});

// Usar el router principal
app.use('/api', routes);

app.listen(PORT, () => {
  console.log("Servidor iniciado en puerto " + PORT);
});

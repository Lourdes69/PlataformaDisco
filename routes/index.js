const express = require('express');
const router = express.Router();
const models = require('../models/index');

// Importar las rutas de usuario y álbum
const userRoutes = require("./usersRoutes");
const albumRoutes = require("./albumRoutes");

// Pasar los modelos a las rutas
router.use((req, res, next) => {
  req.models = models;
  next();
});

// Configurar las rutas
router.use('/users', userRoutes);
router.use('/album', albumRoutes);

module.exports = router;

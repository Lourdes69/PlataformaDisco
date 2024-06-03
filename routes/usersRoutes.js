// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const user = require('../models/user');
router.post('/', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta que recibe un id por params y retorne la data del usuario excluyendo la contraseña
router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id).select('-contraseña');
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para editar los datos de un usuario
router.put('/:id', async (req, res) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-contraseña');
    if (!usuarioActualizado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

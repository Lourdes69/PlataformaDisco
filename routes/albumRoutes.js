const express = require('express');
const router = express.Router();
const Album = require('../models/albums');

// Ruta para agregar un álbum
router.post('/', async (req, res) => {
  try {
    const newAlbum = await Album.create(req.body);
    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para editar un álbum
router.put('/:id', async (req, res) => {
  try {
    const updatedAlbum = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAlbum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para obtener todos los álbumes
router.get('/', async (req, res) => {
  try {
    const albums = await Album.find({});
    res.json(albums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener la información de un álbum específico
router.get('/:id', async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (album) {
      res.json(album);
    } else {
      res.status(404).json({ message: 'Álbum no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para eliminar un álbum
router.delete('/:id', async (req, res) => {
  try {
    await Album.findByIdAndDelete(req.params.id);
    res.json({ message: 'Álbum eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

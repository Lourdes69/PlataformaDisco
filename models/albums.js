const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema para Album que incluye las canciones directamente
const albums = new Schema({
  titulo: {
    type: String,
    required: [true, 'El título es requerido']
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es requerida'],
    minlength: [5, 'La descripción debe tener al menos 5 caracteres'],
    maxlength: [200, 'La descripción no debe exceder los 200 caracteres']
  },
  año: {
    type: Number,
    required: [true, 'El año de lanzamiento es requerido'],
    min: [1, 'El año de lanzamiento debe ser mayor a 0']
  },
  canciones: [
    {
      titulo: {
        type: String,
        required: [true, 'El título de la canción es requerido']
      },
      duracion: {
        type: String,
        required: [true, 'La duración de la canción es requerida']
      }
    }
  ],
  portada: {
    type: String,
    required: [true, 'La URL de la portada es requerida']
  }
});


module.exports = mongoose.model('Album', albums);



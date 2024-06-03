const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Expresión regular para validar el email
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Modelo para Usuario
const userSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es requerido'],
    minlength: [2, 'El nombre debe tener al menos 2 caracteres']
  },
  apellido: {
    type: String,
    required: [true, 'El apellido es requerido'],
    minlength: [2, 'El apellido debe tener al menos 2 caracteres']
  },
  email: {
    type: String,
    required: [true, 'El email es requerido'],
    unique: true,
    validate: {
      validator: function(v) {
        return emailRegex.test(v);
      },
      message: 'Debes ingresar un email válido'
    }
  },
  contraseña: {
    type: String,
    required: [true, 'La contraseña es requerida']
  },
  favoritos: {
    type: [mongoose.Types.ObjectId],
    ref: 'Album',
    default: []
  }
});

module.exports = mongoose.model('Usuario', userSchema);

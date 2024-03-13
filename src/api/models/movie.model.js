const mongoose = require("mongoose");

// Definición del esquema del álbum
const movieSchema = new mongoose.Schema({
  title: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    director: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    year: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

const express = require("express");
const movieRouter = express.Router();
const { createMovie,
    getAllMovies,
    getMovieByTitle,
    getMovieAfter2010,
    getMovieByGenre,
    getMovieById,
    updateMovie,
    deleteMovie, } = require("../controllers/movie.controller");

// Ruta para crear un nuevo álbum
movieRouter.post("/", createMovie);
movieRouter.get("/", getAllMovies);
movieRouter.get("/title/:title", getMovieByTitle);
movieRouter.get("/genre/:genre", getMovieByGenre);
movieRouter.get("/2010", getMovieAfter2010);
movieRouter.get("/:id", getMovieById);
movieRouter.put("/:id", updateMovie);
movieRouter.delete("/:id", deleteMovie);

module.exports = movieRouter;

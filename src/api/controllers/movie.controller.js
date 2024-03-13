const Movie = require("../models/movie.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createMovie = async (req, res, next) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: movie,
    });
  } catch (error) {
    next(error);
  }
};

const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: movies,
    });
  } catch (error) {
    next(error);
  }
};

const getMovieByTitle = async (req, res, next) => {
  try {
    const title = req.params.title;
    const movie = await Movie.findOne({ title: title });
    if (movie) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: movie,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Movie not found",
      });
    }
  } catch (error) {
    next(error);
  }
};
const getMovieByGenre = async (req, res, next) => {
  try {
    const genre = req.params.genre;
    const movies = await Movie.find({ genre: genre });

    if (movies.length > 0) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: movies,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "No movies found for the specified genre",
      });
    }
  } catch (error) {
    next(error);
  }
};

const getMovieAfter2010 = async (req, res, next) => {
  try {
    const movies = await Movie.find({ year: {$gte:2010} });

    if (movies.length > 0) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: movies,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "No movies found released after 2010",
      });
    }
  } catch (error) {
    next(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: movie,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (movie) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: movie,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (movie) {
      res.status(204).json({
        status: 204,
        message: HTTPSTATUSCODE[204],
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovieByTitle,
  getMovieByGenre,
  getMovieAfter2010,
  getMovieById,
  updateMovie,
  deleteMovie,
};

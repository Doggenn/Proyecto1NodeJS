const mongoose = require("mongoose");

const Movie = require("../api/models/movie.model");

const movies = [
  {
    title: 'The Matrix',
    director: 'Hermanas Wachowski',
    year: 1999,
    genre: 'Acción',
  },
  {
    title: 'The Matrix Reloaded',
    director: 'Hermanas Wachowski',
    year: 2003,
    genre: 'Acción',
  },
  {
    title: 'Buscando a Nemo',
    director: 'Andrew Stanton',
    year: 2003,
    genre: 'Animación',
  },
  {
    title: 'Buscando a Dory',
    director: 'Andrew Stanton',
    year: 2016,
    genre: 'Animación',
  },
  {
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Ciencia ficción',
  },
  {
    title: '50 primeras citas',
    director: 'Peter Segal',
    year: 2004,
    genre: 'Comedia romántica',
  },
];

mongoose.connect("mongodb+srv://Doggenn:Vega2016@cluster0.5rqmgtd.mongodb.net/movies")
.then(async ()=> {
    const allMovies = await Movie.find();
    if (allMovies.length > 0) {
        await Movie.collection.drop();
        console.log("Movies borradas");
    }
})
.catch((error) => console.log("error borrando movies",error))
.then(async () => {
    const movieMap = movies.map((movie)=> new Movie(movie));
    await Movie.insertMany(movieMap);
    console.log("Movies insertadas");
})
.catch((error)=> console.log("error insertando movies",error))
.finally(()=> mongoose.disconnect());
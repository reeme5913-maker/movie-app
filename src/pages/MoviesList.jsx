import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = 'dc58af48903dacc6b8e345c89ae0aa0d';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  const addToFavorites = (movie) => {
    const savedFavs = JSON.parse(localStorage.getItem('favorites')) || [];
    const isExist = savedFavs.find((fav) => fav.id === movie.id);

    if (!isExist) {
      savedFavs.push(movie);
      localStorage.setItem('favorites', JSON.stringify(savedFavs));
      alert(`${movie.title} added to favorites!`);
    } else {
      alert('Movie is already in favorites!');
    }
  };

  return (
    <div>
      <h2 className="mb-4">Popular Movies</h2>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text text-muted">Rating: {movie.vote_average}</p>
                <div className="mt-auto d-flex gap-2">
                  <Link to={`/movie/${movie.id}`} className="btn btn-primary flex-grow-1">
                    Details
                  </Link>
                  <button
                    onClick={() => addToFavorites(movie)}
                    className="btn btn-outline-danger"
                  >
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
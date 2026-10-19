import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavs);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavs = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavs);
    localStorage.setItem('favorites', JSON.stringify(updatedFavs));
  };

  return (
    <div>
      <h2 className="mb-4">My Favorite Movies</h2>
      {favorites.length === 0 ? (
        <div className="alert alert-info">No favorites added yet!</div>
      ) : (
        <div className="row">
          {favorites.map((movie) => (
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
                      onClick={() => removeFromFavorites(movie.id)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="row mt-4">
      <div className="col-md-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="img-fluid rounded shadow"
          alt={movie.title}
        />
      </div>
      <div className="col-md-8">
        <h2>{movie.title}</h2>
        <p className="text-muted">{movie.tagline}</p>
        <hr />
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> ⭐ {movie.vote_average} / 10</p>
      </div>
    </div>
  );
};

export default MovieDetails;
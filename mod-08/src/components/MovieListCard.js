import React from 'react';
import PropTypes from 'prop-types';

function MovieListCard({ movie, onMovieClicked }) {
  const result = (
    <div className="movie" onClick={() => onMovieClicked(movie)}>
      <h4>{movie.title}</h4>
      <img src={movie.image} alt={movie.title} />
      <div>{movie.overview}</div>
    </div>
  );

  return result;
}

MovieListCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  onMovieClicked: PropTypes.func.isRequired
};

export default MovieListCard;

import React from 'react';
import PropTypes from 'prop-types';

import MovieListCard from './MovieListCard';

const MovieList = ({ movies, onMovieClicked }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieListCard
        key={movie.id}
        movie={movie}
        onMovieClicked={onMovieClicked}
      />
    ))}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ),
  onMovieClicked: PropTypes.func.isRequired
};

export default MovieList;

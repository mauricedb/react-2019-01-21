import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movies.css';
import MovieList from './MovieList';
import SelectedMovie from './SelectedMovie';

class MoviesPrestation extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired
      })
    ).isRequired,
    selected: PropTypes.shape({
      id: PropTypes.number.isRequired
    }),
    onMovieClicked: PropTypes.func.isRequired,
    onMovieCleared: PropTypes.func.isRequired
  };

  render() {
    const { movies, selected, onMovieCleared, onMovieClicked } = this.props;

    return (
      <div className="container">
        <MovieList movies={movies} onMovieClicked={onMovieClicked} />
        {selected && (
          <SelectedMovie
            key={selected.id}
            selected={selected}
            onMovieCleared={onMovieCleared}
          />
        )}
      </div>
    );
  }
}

export default MoviesPrestation;

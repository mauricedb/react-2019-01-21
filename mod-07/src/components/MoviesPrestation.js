import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movies.css';
import SelectedMovie from './SelectedMovie';

class MoviesPrestation extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id2: PropTypes.number.isRequired
      })
    )
  };
  getMovieListCard(movie) {
    const result = (
      <div
        key={movie.id}
        className="movie"
        onClick={() => this.props.onMovieClicked(movie)}
      >
        <h4>{movie.title}</h4>
        <img src={movie.image} alt={movie.title} />
        <div>{movie.overview}</div>
      </div>
    );

    return result;
  }

  getMovieList() {
    const { movies } = this.props;

    const result = (
      <div className="movies">
        {movies.map(movie => this.getMovieListCard(movie))}
      </div>
    );

    return result;
  }

  render() {
    const moviesList = this.getMovieList();
    const { selected } = this.props;

    return (
      <div className="container">
        {moviesList}
        {selected && <SelectedMovie key={selected.id} selected={selected} />}
      </div>
    );
  }
}

export default MoviesPrestation;

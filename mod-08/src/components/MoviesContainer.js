import React, { Component } from 'react';
import MoviesPrestation from './MoviesPrestation';

class MoviesContainer extends Component {
  state = { movies: [], selected: null };

  async componentDidMount() {
    const rsp = await fetch('/movies.json');
    const movies = await rsp.json();
    this.setState({ movies });
  }

  onMovieClicked = selected => this.setState({ selected });

  onMovieCleared = () => this.setState({ selected: null });

  render() {
    const { movies, selected } = this.state;

    return (
      <MoviesPrestation
        movies={movies}
        selected={selected}
        onMovieClicked={this.onMovieClicked}
        onMovieCleared={this.onMovieCleared}
      />
    );
  }
}

export default MoviesContainer;

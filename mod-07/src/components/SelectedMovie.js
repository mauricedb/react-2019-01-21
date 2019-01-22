import React from 'react';
import PropTypes from 'prop-types';
import withErrorBoundary from './withErrorBoundary';

const SelectedMovie = ({ selected, onMovieCleared }) => (
  <div className="details">
    <div className="detail">
      <div className="detail-header">
        <h4>{selected.title}</h4>
        <span className="close-button" role="button" onClick={onMovieCleared}>
          &times;
        </span>
      </div>
      <img src={selected.image} alt={selected.title} />
      <div>{selected.overview}</div>
      <ul>
        {selected.genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  </div>
);

SelectedMovie.propTypes = {
  selected: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired
};

export default withErrorBoundary(SelectedMovie);

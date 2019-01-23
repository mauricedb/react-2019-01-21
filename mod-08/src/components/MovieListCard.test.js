import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import MovieListCard from './MovieListCard';

afterEach(cleanup);

let wrapper;
let onMovieClicked;
beforeEach(() => {
  onMovieClicked = jest.fn();
  wrapper = render(
    <MovieListCard
      movie={{ title: 'The movie', overview: 'A really cool movie', image: '' }}
      onMovieClicked={onMovieClicked}
    />
  );
});

test('It can render', () => {
  wrapper.getByText('The movie');
});

test('It can render', () => {
  fireEvent.click(wrapper.getByText('The movie'));
  expect(onMovieClicked).toHaveBeenCalledTimes(1);
});

import React, { Component } from 'react';
import Jokes from './Jokes';

class ChuckNorris extends Component {
  render() {
    return (
      <div>
        <h2>Chuck Norris</h2>
        <Jokes url="http://localhost:3001/chuck-norris" />
      </div>
    );
  }
}

export default ChuckNorris;

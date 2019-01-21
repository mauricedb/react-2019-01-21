import React, { Component } from 'react';
import Jokes from './Jokes';

class JonSkeet extends Component {
  render() {
    return (
      <div>
        <h2>Jon Skeet</h2>
        <Jokes url="http://localhost:3001/jon-skeet" />;
      </div>
    );
  }
}
export default JonSkeet;

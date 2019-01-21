import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChuckNorris from './components/ChuckNorris';
import JonSkeet from './components/JonSkeet';

class App extends Component {
  render() {
    return (
      <div>
        <header>
        Chuck Norris
        |
        Jon Skeet 
        </header>
        <ChuckNorris />
        <JonSkeet />
      </div>
    );
  }
}

export default App;

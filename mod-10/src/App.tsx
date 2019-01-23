import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Geetings from './components/Geetings';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Geetings firstName="Maurice" />
        <Geetings firstName={null} />
        <Counter />
        <Counter amount={5} />
      </div>
    );
  }
}

export default App;

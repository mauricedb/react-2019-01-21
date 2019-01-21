import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Link } from 'react-router-dom';

import './App.css';

import ChuckNorris from './components/ChuckNorris';
import JonSkeet from './components/JonSkeet';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header>
            <Link to="/chuck">Chuck Norris</Link>
            |
            <Link to="/jon">Jon Skeet</Link>
          </header>
          <Switch>
            <Route path="/chuck" component={ChuckNorris} />
            <Route path="/jon" component={JonSkeet} />

            <Route path="/jokes" component={ChuckNorris} />
            <Route path="/jokes" component={JonSkeet} />
            <Route render={() => <div>Not found</div>} />
          </Switch>
          {/* <ChuckNorris />
          <JonSkeet /> */}
        </div>
      </HashRouter>
    );
  }
}

export default App;

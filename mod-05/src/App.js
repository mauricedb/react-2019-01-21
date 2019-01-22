import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './store/createStore';
// import { createIncement } from './store/actions';
import Counter from './components/Counter';

// store.dispatch(createIncement());

// setInterval(() => store.dispatch(createIncement()), 2000);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;

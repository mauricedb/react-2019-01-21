import React, { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };

  increment = (value = 1) => {
    this.setState({ count: this.state.count + value });
  };

  incrementLater = () => {
    setTimeout(() => this.increment(), 2500);
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <div>Count: {count}</div>
        <div>
          <button onClick={() => this.increment()}>Increment</button>
          <button onClick={() => this.increment(5)}>Plus 5</button>
          <button onClick={() => this.incrementLater()}>Increment Later</button>
        </div>
      </div>
    );
  }
}

export default Counter;

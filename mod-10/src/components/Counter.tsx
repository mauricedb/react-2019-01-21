import React, { Component } from 'react';

type CounterProps = {
  amount?: number;
};

type CounterState = {
  counter: number;
  firstName: string;
};

class Counter extends Component<CounterProps, CounterState> {
  state = {
    counter: 0,
    firstName: ''
  };



  
  increment = () => {
    this.setState({ counter: this.state.counter + (this.props.amount || 1) });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>CLick me</button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

export default Counter;

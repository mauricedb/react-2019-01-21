import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createIncement, createIncementLater } from '../store/actions';

class Counter extends Component {
  increment = (value = 1) => {
    this.props.increment(value);
  };

  incrementLater = () => {
    this.props.incrementLater();
  };

  render() {
    const { count } = this.props;

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

function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: (value = 1) => dispatch(createIncement(value)),
    incrementLater: (value = 1) => dispatch(createIncementLater(value))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

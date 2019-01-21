import React, { Component } from 'react';

class Jokes extends Component {
  state = { jokes: [] };

  async componentDidMount() {
    const { url } = this.props;
    const rsp = await fetch(url);
    const jokes = await rsp.json();
    this.setState({ jokes });
  }

  render() {
    const { jokes } = this.state;
    return (
      <ul>
        {jokes.map(joke => (
          <li key={joke.id}>{joke.joke}</li>
        ))}
      </ul>
    );
  }
}

export default Jokes;

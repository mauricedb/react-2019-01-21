import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

{
  /* <div>

</div> */
}

// const element = React.createElement(
//   'div',
//   {
//     id: 'one',
//     className: 'greeting'
//   },
//   React.createElement('h1', null, 'Hello London'),
//   React.createElement('h2', null, 'With React'),

// );

// ReactDOM.render(element, document.getElementById('root'));

class Greeting extends React.Component {
  render() {
    const { firstName } = this.props;

    return <p>Hello {firstName || 'Stranger'}</p>;
  }
}

class NameEditorChild extends React.Component {
  render() {
    const { firstName, onClick, onChangeFirstName } = this.props;
    return (
      <div>
        <input type="text" value={firstName} onChange={onChangeFirstName} />
        <div>{firstName}</div>
        <button onClick={onClick}>Click me</button>
      </div>
    );
  }
}

class NameEditor extends React.Component {
  state = {
    firstName: 'Maurice'
  };

  onChangeFirstName = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  onClick = () => {
    // alert('I was clicked');
    // this.state.firstName = 'Jack'
    this.setState({
      firstName: 'Jack'
    });
  };

  render() {
    const { firstName } = this.state;

    return (
      <NameEditorChild
        firstName={firstName}
        onClick={this.onClick}
        onChangeFirstName={this.onChangeFirstName}
      />
    );
  }
}

class ChuckNorris extends React.Component {
  state = {
    jokes: []
  };

  async componentDidMount() {
    const url =
      'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript';

    const rsp = await fetch(url);
    const data = await rsp.json();
    const jokes = data.value;
    this.setState({ jokes });
  }

  render() {
    const { jokes } = this.state;

    return (
      <div>
        <h2>Jokes</h2>

        <ul>
          {jokes.map(joke => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class Element extends React.Component {
  render() {
    const name = 'Marry';

    return (
      <div className="greeting" id="one">
        <h1>Hello London</h1>
        <h2>With React</h2>
        <ChuckNorris />
        <NameEditor />
        <Greeting firstName="Maurice" />
        <Greeting firstName="Jack" />
        <Greeting firstName={name} />
        <Greeting />
      </div>
    );
  }
}

ReactDOM.render(<Element />, document.getElementById('root'));

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      char: ''
    };
  }

  componentDidMount() {
    axios
      .get('https://swapi.co/api/people/1')
      .then(res => this.setState({ char: res.data }));
  }

  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.char.name}</h1>
        <h1>Birth Date: {this.state.char.birth_year}</h1>
        <h1>Height: {this.state.char.height}</h1>
      </div>
    );
  }
}

export default App;

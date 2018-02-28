import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import router from './router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Signup">Signup</Link>
        </div>
        <div>
          <Link to="/details">Details</Link>
        </div>
        {router}
      </div>
    );
  }
}

export default App;

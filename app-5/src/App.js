import React, { Component } from 'react';
//import './App.css';
import Image from './Image';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 'http://via.placeholder.com/500x500',
    };
  }
  render() {
    return <div className=""><Image img={this.state.img} /></div>;
  }
}
export default App;

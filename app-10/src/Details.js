import React, { Component } from 'react';
import axios from 'axios';
//import './Details.css';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      item: {}
    };
  }

  componentWillMount() {
    axios
      .get(
        `https://practiceapi.devmountain.com/products/${
          this.props.match.params.id
        }`
      )
      .then(res => this.setState({ item: res.data }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.item.title}</h2>
        <img src={this.state.item.image} width="200" alt="" />
        <h4>{`Price: ${this.state.item.price}.00`}</h4>
      </div>
    );
  }
}

export default Details;

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import './Products.css';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get('https://practiceapi.devmountain.com/products')
      .then(res => this.setState({ products: res.data }));
  }

  render() {
    let products = this.state.products.map((product, index) => {
      if (product.image) {
        return (
          <Link key={index} to={`/details/${product.id}`}>
            <img src={product.image} width="200" alt="" />
          </Link>
        );
      }
    });

    return (
      <div className="">
        <h1>Products</h1>
        {products}
      </div>
    );
  }
}
export default Products;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotation: ["With", "Your", "Shield", "Or", "On", "It"]
    };
  }
  render() {
    let foodsToDisplay = this.state.quotation.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return <div className="App">{foodsToDisplay}</div>;
  }
}

export default App;

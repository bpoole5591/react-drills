import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      input: ''
    };
  }
  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    return (
      <div className="App">
        <h1>My To-do's</h1>
        <div>
          <input
            value={this.state.input}
            placeholder="Enter a To-Do"
            onChange={e => this.setState({ input: e.target.value })}
          />
          <button
            onClick={() =>
              this.setState({
                list: [...this.state.list, this.state.input],
                input: ''
              })
            }
          >
            Add
          </button>
        </div>
        {list}
      </div>
    );
  }
}

export default App;

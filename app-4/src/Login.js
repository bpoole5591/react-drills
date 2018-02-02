import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
    this.userOnChange = this.userOnChange.bind(this);
    this.passOnChange = this.passOnChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  userOnChange(e) {
    this.setState({ user: e.target.value });
  }

  passOnChange(e) {
    this.setState({ password: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    alert(`User: ${this.state.user}, Password: ${this.state.password}`);
    this.setState({ password: '', user: '' });
  }

  render() {
    return (
      <div className="center">
        <input placeholder="Username" value={this.state.user} onChange={this.userOnChange} />
        <input placeholder="Password" value={this.state.password} onChange={this.passOnChange} />
        <button type="submit" onClick={this.onFormSubmit}>
          Login
        </button>
      </div>
    );
  }
}
export default Login;

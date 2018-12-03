import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number : 0}
  increament = () => {
    this.state.number++;
    this.setState({number: this.state.number});
  }
  decreament = () => {
    this.state.number--;
    this.setState({number: this.state.number});
  }
  render() {
    return(
    <div>
        <button onClick={this.increament}>+</button> <span>{this.state.number}</span> <button onClick={this.decreament}>-</button>
    </div>
    );
  }
}

export default App;

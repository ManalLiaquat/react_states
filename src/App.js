import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      date: new Date().toLocaleString(),
      count: 0
    }
  }

  counter(){
    this.setState({
      date: new Date().toLocaleString(),
      count: ++this.state.count
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=> this.counter()}>click</button>
        <p>Date: {this.state.date}</p>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default App;

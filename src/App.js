import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      date: new Date().toLocaleString(),
      count: 0,
      text: 'I love Pakistan',
      condition: true
    }
  }

  counter(){
    this.setState({
      date: new Date().toLocaleString(),
      count: ++this.state.count,
      text: this.state.condition ? "Hello World" : 'I love Pakistan',
      condition: !this.state.condition
    })
  }

  renderHeader(){
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    )
  }

  renderBody(){
    return(
      <div>
        <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
        <button onClick={() => this.counter()}>click</button>
        <p>Date: {this.state.date}</p>
        <p>Count: {this.state.count}</p>
        <p>{this.state.text}</p>
      </div>
    )
  }

  renderFooter(){
    return(
      <h1>This is a footer</h1>
    )
  }
  
  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    );
  }
}

export default App;

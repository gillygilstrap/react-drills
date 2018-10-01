import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      inputBox: '',
    }
    this.inputBoxUpdater = this.inputBoxUpdater.bind(this)
  }

inputBoxUpdater(event) {
  this.setState({inputBox : event.target.value})
}


  render() {
    const {inputBox} = this.state
    return (
      <div className="App">
        <input onChange={this.inputBoxUpdater} value={inputBox} className="inputLine"/>
        <br />
          {inputBox}
      </div>
    );
  }
}

export default App;

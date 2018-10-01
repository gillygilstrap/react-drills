import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
      super()
      this.state = {
        userInput: '',
        passwordInput: '',

      }
      this.userInputUpdater = this.userInputUpdater.bind(this)
      this.passwordInputUpdater = this.passwordInputUpdater.bind(this)
      this.alertValues = this.alertValues.bind(this)
    }

    userInputUpdater(event) {
      this.setState({
        userInput: event.target.value
      })
    }
    passwordInputUpdater(event) {
      this.setState({
        passwordInput: event.target.value
      })
    }
    alertValues() {
      alert(this.state.userInput + ' '  +this.state.passwordInput)
    }



  render() {
    return (
      <div className="App">
          <input onChange={this.userInputUpdater} value={this.state.userInput}/>
          <input type="password"onChange={this.passwordInputUpdater} value={this.state.passwordInput}/>
          <button onClick={this.alertValues}>Click Me!!!</button>
      </div>
    );
  }
}
          

export default App;


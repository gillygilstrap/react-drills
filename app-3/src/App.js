import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      foodList: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese' ],
      inputBox: ''
    }
    this.inputBoxUpdater = this.inputBoxUpdater.bind(this)
  }

  
  inputBoxUpdater(e) {
    this.setState({
      inputBox: e.target.value
    })
  }


 

  render() {
    let tempArray = this.state.foodList.filter(elem => elem.substring(0,this.state.inputBox.length) === this.state.inputBox)

    let displayFoodList = tempArray.map((elem, i) => {
      return (<h2> {elem} </h2>)
    })
    return (
      <div className="App">
      <input onChange={this.inputBoxUpdater} value={this.state.inputBox} />
        { displayFoodList}
      </div>
    );
  }
}

export default App;

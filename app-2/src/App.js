import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      listItem : ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese' ]
    }
  }


  render() {
    let foodsToDisplay = this.state.listItem.map(function(elem,i) {
      return (<h2> {elem} </h2>)
    })

    return (
      <div className="App"> 
      {foodsToDisplay}
      </div>
    )
  }
}
  

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'


class App extends Component {

  constructor() {
    super()
    this.state = {
      taskList: [],
      task: ''
    }
    this.taskListStateUpdater = this.taskListStateUpdater.bind(this)
    // this.listUpdater = this.listUpdater.bind(this)
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event){
    this.setState({
      task: event.target.value
    })
  }

  taskListStateUpdater() {
    
    const tempArray = this.state.taskList.slice()
    tempArray.push(this.state.task)
    this.setState({
      taskList: tempArray,
      task: ''
    })

    
    
  }

 


  render() {
    
    const taskArray = this.state.taskList.map(item => {
      return <Todo task={item} />
    })
    return (
      <div className="App">
       <h1>My to-do List:</h1>
       <input onChange={this.changeHandler} value={this.state.task} type="text"/>
       <button onClick={this.taskListStateUpdater}>Add</button>
       <br/>
       <ul>
          {taskArray}

        </ul>
      </div>
    );
  }
}

export default App;

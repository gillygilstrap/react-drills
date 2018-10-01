import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/ImageFinder'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Image 
        myImage="https://bt-wpstatic.freetls.fastly.net/wp-content/blogs.dir/2904/files/2016/08/st-petersburg.jpg"
        />
         
      </div>
    );
  }
}

export default App;

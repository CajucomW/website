import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';

// function App() {
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="FixedTop">
          <h1>
            wence cajucom
          </h1>
          
          <div className="App-navBar">
            <NavBar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

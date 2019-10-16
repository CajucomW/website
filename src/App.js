import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar/NavBar.js';
import About from './components/About/About.js';


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
        
        <div className="App-mainContent">
            <BrowserRouter>
              <Route exact path='/' component={About} />
            </BrowserRouter>
          </div>
          
      </div>
    );
  }
}

export default App;

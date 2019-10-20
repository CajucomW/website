import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar/NavBar.js';
import About from './components/About/About.js';
import Tech from './components/Tech/Tech.js';
import JiuJitsu from './components/Jiujitsu/Jiujitsu.js';
import PTA from './components/PTA/PTA.js';

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
          {/* <BrowserRouter> */}
            <Switch>
              <Route exact path='/' component={About} />
              <Route exact path='/tech/' component={Tech} />
              <Route exact path='/jiujitsu/' component={JiuJitsu} />
              <Route exact path='/PTA/' component={PTA} />
            </Switch>
          {/* </BrowserRouter> */}
          </div>
          
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './Styles/App.css';
import Header from './Components/Header.js';
import Body from './Components/Body.js';
import BackgroundImage from './Components/BackgroundImage.js';

// Main Page entrance point
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <BackgroundImage />
        </header>
      
        <body>
          <Body />
        </body>
      </div>
    );
  }
}

export default App;

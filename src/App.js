import React, { Component } from 'react';
import './Styles/App.css';

import Body from './Components/Body.js';
// import Header from './Components/Header.js';
// import BackgroundImage from './Components/BackgroundImage.js';

// Main Page entrance point
class App extends Component {
  render() {
    return (
      <div className="App">
          <Body />
      </div>
    );
  }
}

export default App;

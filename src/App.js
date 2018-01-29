import React from 'react';
import './Styles/App.css';

// Body 
import Body from './Components/Body.js';

// Main Page entrance point
class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Body />
      </div>
    );
  }
}

export default App;

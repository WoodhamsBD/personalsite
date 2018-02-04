import React from 'react';
import './Styles/App.css';

//Router
import ReactRouter from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


// Components
import Home from './Components/Home.js';
import Header from './Components/Header.js';
import Projects from './Components/Projects.js';
import Navigation from './Components/Navigation.js';



// Main Page entrance point
class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Home />
      </div>
    );
  }
}

export default App;

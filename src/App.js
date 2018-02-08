import React from 'react';
import './Styles/App.css';

//Router
import ReactRouter from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

// Components
import Home from './Components/Home.js';
import Header from './Components/Header.js';
import Projects from './Components/Projects.js';
import Interests from './Components/Interest.js';
import Navigation from './Components/Navigation.js';
import Interest from './Components/Interest.js';

// Main Page entrance point
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Initial Header so this div is placed within Grid strucutre */}
          <Header />
          {/* Navigation Router links for component rendering */}
          <Navigation />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/interest' component={Interests} />
              <Route exact path='/projects' component={Projects} />

              {/* Default for no match */}
              <Route render={function() {
                return <p>Route Not Found!</p>
              }} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

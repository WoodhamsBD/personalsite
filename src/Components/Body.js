const React = require('react');

// Router import and utilization
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

// Components
const Header = require('./Header.js');
const Interst = require('./Interest.js');
const Projects = require('./Projects.js');
const Navigation = require('./Navigation.js');

class Body extends React.Component {
  render() {
    return(
      <div>
        <Router>
          <Navigation />
        </Router>

        <div>
          <Header />
        </div>
      </div>
    )
  }
}

module.exports = Body;
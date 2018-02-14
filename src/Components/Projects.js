import React, { Component } from 'react';
import '../Styles/App.css';

// import Footer from './Footer.js';

class Projects extends Component {

  // Simple direct render of projects component for inclusion below header bar
  render() {
    return (
      <div className="projects-container">
        <h1 className="center" >Personal Projects</h1>
        <p className="center">Here are several of the projects I am currently working on:</p>

        <div className="project">
          <h3>Stock History and Research</h3>
          <ul className="project-links">
            <li><a href="https://github.com/WoodhamsBD/stockdisplay" target="_blank" rel="noopener noreferrer">Github</a></li>
            {/* <li><a href="#" target="_blank">Link to URL</a></li> */}
          </ul>
          
          <h4>Stack:</h4>
          <p>Written with a Node server using Express routing and the axios library to handle API calls to AlphaVantage</p>
          <p>Front end written in React and utilizing the D3 data visualization library to generate graphs</p>

          <h4>Purpose:</h4>
          <p>Familiarize myself withe both axios and Alpha Vantage API as well as practice utilizing state management with React.</p>
          
        </div>

        <br></br>

        <div className="project">
          <h3>Office Appointment Scheduling and Template App</h3>
          <ul className="project-links">
            <li><a href="https://github.com/WoodhamsBD/ADMD" target="_blank" rel="noopener noreferrer">Github</a></li>
            {/* <li><a href="#" target="_blank">Link to URL</a></li> */}
          </ul>

          <h4>Stack:</h4>
          <p>Rails 5 backend and front-end templating through standard erb pages.</p>

          <h4>Purpose:</h4>
          <p>Utilize basic User authentication, familiarize myself with rails calendar gems and learn Word templating using Postgres DB for information storage</p>
        </div>

        <br></br>
      </div>
    )
  }
}

export default Projects;
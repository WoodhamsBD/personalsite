import React, { Component } from 'react';
import '../Styles/App.css';

class Projects extends Component {

  render() {
    return (
      <div className="projects">
        {/* TODO: Css classes for each header within navigation render */}
        {/* TODO: Css classes for each item within these renders - including different classes for project, interest, photos, etc */}
        <h1>Personal Projects</h1>
        <p>A paragraph for my first project</p>
        <p>This will follow with a 4 column width layout with a thumbnail for each project</p>
        <p>After each thumbnail will be a write up with a quick discription of each project and the stack that it is writen with</p>
        <p>include:
          <ul>
            <li></li>
          </ul>
        </p>
      </div>
    )
  }
}

export default Projects;
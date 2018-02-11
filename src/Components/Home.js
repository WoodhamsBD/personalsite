import React, { Component } from 'react';
import '../Styles/App.css';


// Components
class Home extends Component {
  render() {
    return(
      <div className="home-container">
        <h1 className="center">Welcome to my personal site</h1>
        <p>My name is Bryan Woodhams, currently a student at SFSU in the Computer Science department.</p>
        <p></p>
      </div>
    )
  }
}

export default Home;
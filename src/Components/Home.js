import React, { Component } from 'react';
import '../Styles/App.css';


// Components
class Home extends Component {
  render() {
    return(
      <div className="home-container">
        <h1 className="center">Welcome to my personal site</h1>
        <p>You will find links to projects that are in progress under the corresponding link and some information about me.</p>
      </div>
    )
  }
}

export default Home;
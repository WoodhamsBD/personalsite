import React, { Component } from 'react';
import '../Styles/App.css';

class Header extends Component {
  render() {
    return (
      <div className="coverInfo">
        <h1>Welcome to my Website</h1>
        <p>Contact information:</p>
      </div>
    );
  }
}

export default Header;
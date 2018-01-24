import React, { Component } from 'react';
import '../Styles/App.css';

class Header extends Component {
  render() {
    return (
      <div className="coverInfo">
        <h1>Bryan Woodhams</h1>
        <p>Web and Product Developer</p>
        <p>Student @ SFSU</p>
      </div>
    );
  }
}

export default Header;
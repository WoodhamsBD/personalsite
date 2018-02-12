const React = require('react');

class Header extends React.Component {
  render() {
    return (
      <div className="coverInfo">
        <h1>Bryan Woodhams</h1>
        <p>Full Stack Web and Product Developer</p>
        <p>Current BCS Student @ SFSU</p>
        <p><a href="https://github.com/WoodhamsBD" target="_blank">Github Profile</a> | <a href="https://www.linkedin.com/in/woodhamsbd/" target="_blank">LinkedIn</a></p>
      </div>
    );
  }
}

module.exports = Header;
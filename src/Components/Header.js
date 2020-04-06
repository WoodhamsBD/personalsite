const React = require('react');

class Header extends React.Component {
  render() {
    return (
      <div className="coverInfo">
        <h1>Bryan Woodhams</h1>
        <p>Recent Graduate: BA of General Studies in Business Administration</p>
        <p>Full Stack Web and Product Developer</p>
        <p><a href="https://github.com/WoodhamsBD" target="_blank" rel="noopener noreferrer">Github Profile</a> | <a href="https://www.linkedin.com/in/woodhamsbd/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    );
  }
}

module.exports = Header;
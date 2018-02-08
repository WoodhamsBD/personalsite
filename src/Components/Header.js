const React = require('react');

class Header extends React.Component {
  render() {
    return (
      <div className="coverInfo">
        <h1>Bryan Woodhams</h1>
        <p>Full Stack Web and Product Developer</p>
        <p>Current BCS Student @ SFSU</p>
      </div>
    );
  }
}

module.exports = Header;
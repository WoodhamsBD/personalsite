import React, { Component } from "react";
import '../Styles/App.css';

function interest(props) {
  let interests = [{
    id: 1,
    title: "First Interst",
    content: "This is the content for my first interest"
  }, {
    id: 2,
    title: "Second Interest",
    content: "This is the content for the second item in my interest list"
  }, {
    id: 3,
    title: "Third Interest",
    content: "Here will be the third interest content"
  }, {
    id: 4,
    title: "Fourth Interest",
    content: "Final Conent section - will be in grid form and stack two on top of each other?"
  }];

  return (
    <ul className="interests">
      {interests.map(function(interest) {
        return (
          <li >
            {interest}
          </li>
        )
      })}
    </ul>
  )
}

class Interest extends Component {
  constructor (props) {
    super(props)
  }


  // Will need to have indepenant sub components in here for each one?

  // Go back over the mapping function for the component return git s

  // Display
  render() {
    return(
      <div className="interests">
        <h1>Interests</h1>
      </div>
    )
  }
}

export default Interest;
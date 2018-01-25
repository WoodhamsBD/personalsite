import React, { Component } from "react";
import '../Styles/App.css';

class Interest extends Component {
  render() {
    const interests = [{
        id: 1, title: "First Interst", content: "This is the content for my first interest"
      }, {
        id: 2, title: "Second Interest", content: "This is the content for the second item in my interest list"
      }, {
        id: 3, title: "Third Interest", content: "Here will be the third interest content"
      }, {
        id: 4, title: "Fourth Interest", content: "Final Conent section - will be in grid form and stack two on top of each other?"
      }
    ];

    const interestItems = interests.map((interest) => 
      <div key={interest.id}>
        <h3>{interest.title}</h3>
        <p>{interest.content}</p>
      </div>
    );

    return(
      <div className="personalSpace">
        {interestItems}
      </div>
    )
  }
}

export default Interest;
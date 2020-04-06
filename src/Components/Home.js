import React, { Component } from 'react';
import '../Styles/App.css';


// Components
class Home extends Component {
  render() {
    return(
      <div className="home-container">
        <h1 className="center">Welcome to my site!</h1>
        
        <p>Recently completed a Bachelors of the Arts, General Studies in Business Administration</p>
        <p>Seeking new opportunities in many different areas of interest</p>

        <h3 className="center">About Me</h3>
        <p>
          I am a man of many interest. I love being outdoors and have worked several different jobs in the industry from being a Registered Maine Guide to leading bus trips to ski mountains for up to 50 clients.
        </p>

        <h3>Current Interests</h3>
        <p>Currently learning about the world of hydroponic, aquaponic and aeroponics. I feel the future of our food product is ripe for a significant shift. The current demand for organic, wholesome produce is growing rapidly and there is an exciting future in these fields.</p>

        <div>
          <h3> Photo Intro</h3>

          <div class="tileImages">
            <img src="" alt="Personal Photos"></img>
            <img src="" alt="Personal Photos"></img>
            <img src="" alt="Personal Photos"></img>
            <img src="" alt="Personal Photos"></img>
            <img src="" alt="Personal Photos"></img>
            <img src="" alt="Personal Photos"></img>

          </div>
        </div>
      </div>
    )
  }
}

export default Home;
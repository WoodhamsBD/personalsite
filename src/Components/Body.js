import React, { Component } from 'react';
import '../Styles/App.css';

import Header from './Header.js';
// import BackgroundImage from './BackgroundImage.js';
import Interest from './Interest.js';

class Body extends Component {
  render() {
    return(
        <div>
          <Header />
          <Interest />
        </div>
    )
  }
}

export default Body;
import React, { Component } from 'react';
import '.'

// Components
class Home extends React.Component {
  render() {
    return(
      <div>
        <Navigation />
        <Router>
          <div>
            <Switch>
              <Route path='/interest' component={Interest} />
            </Switch>
          </div>
        </Router>

        <div>
          <Header />
        </div>
      </div>
    )
  }
}

module.exports = Home;
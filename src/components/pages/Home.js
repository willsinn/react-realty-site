import React, { Component } from 'react';
import Listings from './listings';




class Home extends Component {

    constructor() {
      super();
      this.state = {active: true};
      this.handleHomeClick = this.handleHomeClick.bind(this);
    }

    handleHomeClick(e) {
      e.preventDefault();
      this.setState(prevState => ({
        active: !prevState.active
      }));
    }

  render() {
    return (
      <div className="Home">
        <a href="#" onClick={this.handleHomeClick}>
          {this.state.active ? 'Hide' : 'Show'}
          Home
        </a>
        {homePage}
      </div>
    );
  }
}



export default Home;

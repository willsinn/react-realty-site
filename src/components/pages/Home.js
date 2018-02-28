import React, { Component } from 'react';
import Listings from './listings';




class Home extends Component {
    constructor() {
      super();
      this.state = {activePage: true};
      this.handleHomeClick = this.handleHomeClick.bind(this);
    }

    handleHomeClick(e) {
      e.preventDefault();
      this.setState(prevState => ({
        activePage: !prevState.activePage
      }));
    }

  render() {
    return (
      <div className="Home">
          {page}
        <a href="#" onClick={this.handleHomeClick}>
          {this.state.activePage ? 'Hide' : 'Show'}
          Home
        </a>
      </div>
    );
  }
}



export default Home;

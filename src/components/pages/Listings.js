import React, { Component } from 'react';




class Listings extends Component {

  constructor() {
    super();
    this.state = {active: false};
    this.handleListingsClick = this.handleListingsClick.bind(this);
  }

  handleListingsClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

render() {
  return (
    <div className="Listings">
      <a href="#" onClick={this.handleListingsClick}>
        {this.state.active ? 'Hide' : 'Show'}
        Listings
      </a>
      {listingsPage}
    </div>
  );
  }
}



export default Listings;

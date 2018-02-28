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
    <li className="Listings">
      <a id="listingsPage" href="#" onClick={this.handleListingsClick}>
        {this.state.active ? 'Hide' : 'Show'}
        Listings
      </a>
      {this.props.page}    
    </li>
  );
  }
}



export default Listings;

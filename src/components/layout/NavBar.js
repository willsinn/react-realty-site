import React, { Component } from 'react';
import styles from '../styles/NavBar.css';
import PageControl from '../pages/PageControl';


class NavBar extends Component {

  render(){
    return (
      <div className="NavBar">
          <button
            className="ListingsPageButton"
            onClick={this.props.onClick('listings')}
          >
            Listings
          </button>
          <button
            className="HomePageButton"
            onClick={this.props.onClick('home')}
          >
            Home
          </button>
      </div>
    );
  }
}

export default NavBar;

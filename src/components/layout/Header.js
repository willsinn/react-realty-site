import React, { Component } from 'react';
import styles from '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="StickyHeader">
          <header id="header-container">
              <div className="header-col picture">
                <p className="header-content">Profile Picture Goes Here</p>
              </div>

              <div className ="header-col name">
                <p className="header-content"> Name Goes Here </p>
              </div>

              <div className ="header-col company">
                <p className="header-content">Company Name Goes Here</p>
              </div>
          </header>
        </div>
    );
  }
}

export default Header;

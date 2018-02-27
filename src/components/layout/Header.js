import React, { Component } from 'react';
import styles from '../styles/Header.css';

class Header extends Component {
  render() {
    return (

          <header className="header-layout">
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
    );
  }
}

export default Header;

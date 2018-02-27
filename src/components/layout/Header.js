import React, { Component } from 'react';
import styles from '../styles/Header.css';

class Header extends Component {
  render() {
    return (

          <header className="header-layout">
              <div className="header-col picture">
                <p>Profile Picture Goes Here</p>
              </div>

              <div className="header-col name">
                <p> Name Goes Here </p>
              </div>

              <div className="header-col company">
                <p>Company Name Goes Here</p>
              </div>
          </header>
    );
  }
}

export default Header;

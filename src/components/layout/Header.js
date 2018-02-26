import React, { Component } from 'react';
import styles from '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header>

          <div>
          <ul>

            <li className="ProfilePicture">
              Profile Picture Goes Here
              </li>

              <li className="Name">
            Name Goes Here
            </li>

            <li className="CompanyName">
              Company Name Goes Here
              </li>
          </ul>
          </div>

      </header>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import styles from '../styles/NavBar.css';

class NavBar extends Component {
  render() {
    return (

          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Listings</a>
              </li>
            </ul>
          </nav>

    );
  }
}

export default NavBar;

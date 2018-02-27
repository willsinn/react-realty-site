import React, { Component } from 'react';
import styles from '../styles/NavBar.css';

class NavBar extends Component {
  render() {
    return (

          <nav className="navbar-layout">
            <ul>
              <li className="nav-col home">
                <a className="nav-content" href="#">Home</a>
              </li>
              <li className="nav-col about">
                <a className="nav-content" href="#">About</a>
              </li>
              <li className="nav-col contact">
                <a className="nav-content" href="#">Contact</a>
              </li>
              <li className="nav-col listings">
                <a className="nav-content" href="#">Listings</a>
              </li>
            </ul>
          </nav>

    );
  }
}

export default NavBar;

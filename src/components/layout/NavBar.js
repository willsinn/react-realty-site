import React, { Component } from 'react';
import styles from '../styles/NavBar.css';

class NavBar extends Component {
  render() {
    return (

          <nav className="navbar-layout">
            <ul className="nav-buttons">

              <li className="nav-col home">
                <a className="nav-button" href="#">Home</a></li>

              <li className="nav-col about">
                <a className="nav-button" href="#">About</a></li>

              <li className="nav-col contact">
                <a className="nav-button" href="#">Contact</a></li>

              <li className="nav-col listings">
                <a className="nav-button" href="#">Listings</a></li>

            </ul>
          </nav>

    );
  }
}

export default NavBar;

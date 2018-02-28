import React, { Component } from 'react';
import Home from '../pages/Home';
import Listings from '../pages/Listings';
import styles from '../styles/NavBar.css';
import ReactDOM from 'react-dom';
//import Listings from '..pages/Listings';




class NavBar extends Component {
  constructor(props) {
  super(props)
  this.state = {
    active: {
      1: true,
      2: false,
    }
  }
}

activeFilter(e){
  const newObj = {
      [e.target.id]: !this.state.active[e.target.id]
    }
  this.setState({
    active: Object.assign({}, this.state.active, newObj)
  })
}

render(){
  return (
    <div className="NavBar">

      <li className="Home">
        <a href="#" onClick={(e) => this.handleHomeClick(e)}>
          Home
        </a>
      </li>
      <li className="Listings">
        <a href="#" onClick={(e) => this.handleListingsClick(e)}>
          Listings
        </a>
      </li>

    </div>

    );
  }
}

export default NavBar;

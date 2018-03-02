import React, { Component } from 'react';
import styles from '../styles/NavBar.css';
import ReactDOM from 'react-dom';
import PageControl from '../pages/PageControl';


class NavBar extends Component {
  // handleClick(e){
  //   e.preventDefault();
  //   if (this.onClick.isActivePage === true){
  //     return;
  //   } else {
  //     this.setState(prevState=> {
  //       activePage: 'profile-page'
  //     });
  //   }
  // }

  render(){
    return (
      <navbar className="NavBar">
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
      </navbar>
    );
  }
}

export default NavBar;

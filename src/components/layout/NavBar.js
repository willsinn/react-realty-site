import React, { Component } from 'react';
import styles from '../styles/NavBar.css';
import ReactDOM from 'react-dom';
import PageControl from '../pages/PageControl';


class NavBar extends Component {

handleClick(e){
  // e.preventDefault()
  // if (this.props.page.title === this.state.isActivePage) {
  //   return;
  // } else {(this.props.page.title === )
  // }
}

handleClick(e){
  e.preventDefault();
  if (this.onClick.isActivePage === true){
    return;
  } else {
    this.setState(prevState=> {
      isActivePage: !prevState.isActivePage
    });
  }
}

render(){
  return (
    <navbar className="NavBar">
        <button className="ListingsPageButton" onClick={this.props.onClick}>
          Listings
        </button>
        <button className="HomePageButton" onClick={this.props.onClick}>
          Home
        </button>
    </navbar>
    );
  }
}

export default NavBar;

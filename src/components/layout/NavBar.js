import React, { Component } from 'react';
import PageControl from './layout/PageControl';
import styles from '../styles/NavBar.css';
import ReactDOM from 'react-dom';
import PageControl from '..pages/PageControl';


class NavBar extends Component {

  HomePageButton(props) {
    return (
    <button onClick={this.props.onClick}>
      Home
    </button>
  );
}

ListingsPageButton(props) {
  return (
  <button onClick={this.props.onClick}>
    Home
  </button>
);
}

render(){
  return (
    <wrapper className="NavBar">
      {HomePageButton}
      {ListingsPageButton}


    </wrapper>
    );
  }
}

export default NavBar;

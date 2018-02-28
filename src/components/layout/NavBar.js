import React, { Component } from 'react';
import PageControl from './layout/PageControl';
import styles from '../styles/NavBar.css';
import ReactDOM from 'react-dom';
//import Listings from '..pages/Listings';




class NavBar extends Component {


  const isActivePage = props.isActivePage;
    if {
       <.onClickValue===.isActivePage />
    } return;
    else {
     <.match.onClickValue === .unActivePage,
        .unActivateCurrentPage,
        .activateOnClickedPage/>
    }

render(){
  return (
    <wrapper className="NavBar">

      <li className="Home">
        Home

        {homePageClicked}
      </li>
      <li className="Listings">
        <a href="#" onClick={(e) => this.handleListingsClick(e)}>
          Listings
        </a>
      </li>

    </wrapper>

    );
  }
}

export default NavBar;

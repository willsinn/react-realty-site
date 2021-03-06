import React, { Component } from 'react';
import HomePage from './HomePage';
import ListingsPage from './ListingsPage';




class PageControl extends Component {

  renderActivePage() {
    if (this.props.activePage === 'listings') {
      return <ListingsPage />;
    } else if (this.props.activePage === 'home') {
      return <HomePage />;
    } else {
      return null;
    }
  }

  render() {
    console.log('this.props.activePage', this.props.activePage);
    return (
      <div className="PageControl">
        {this.renderActivePage()}
      </div>
    );
  }
}



export default PageControl;

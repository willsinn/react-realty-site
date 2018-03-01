import React, { Component } from 'react';




class ListingsPage extends Component {


render() {
  return (
    <li className="ListingsPage">
      <button onClick={this.props.onClick}>
        Listings
      </button>
      <p>
    </li>
    );
  }
}



export default ListingsPage;

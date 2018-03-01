import React, { Component } from 'react';




class ListingsPage extends Component {

  notActive(props){
  if (!props.isActivePage) {
    return null;
  }}

render() {

  return (
    <li className="ListingsPage">
      <div>
        {this.props.page.title}
        <p>Listings Page is Rendered</p>
      </div>
    </li>
    );
  }

}

export default ListingsPage;

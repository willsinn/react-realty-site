import React, { Component } from 'react';




class ListingsPage extends Component {


render() {

  var liStyle =  {
    listStyle: 'none',
    backgroundColor: 'red',
    display: 'flex',
    flex: '1'
  }
  return (
    <li style = {liStyle} className="ListingsPage">
      <div>

        <p>Listings Page is Rendered</p>
      </div>
    </li>
    );
  }

}

export default ListingsPage;

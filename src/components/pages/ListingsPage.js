import React, { Component } from 'react';
import ListingOne from '../images/ListingOne.jpeg';



class ListingsPage extends Component {


render() {

  var listingsStyle =  {
    listStyle: 'none',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  }
  return (
    <li style = {listingsStyle} className="ListingsPage">
      <div className= "ActiveListings">
            <div className="ListingOne">
              <img src= {ListingOne} alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'</p>
            </div>
              <div>
              <button
                className="ListingOneMap"
                >
                Map of Listing One
              </button>
              </div>

            <div className="ListingTwo">

            </div>

            <div className="ListingThree">

            </div>
        <p>Listings Page is Rendered</p>
      </div>
    </li>
    );
  }

}

export default ListingsPage;

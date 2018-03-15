import React, { Component } from 'react';
import ProfilePicture from '../images/ProfilePicture.jpg';




class HomePage extends Component {



  render() {

    var homeStyle = {
      listStyle: 'none',
      backgroundColor: 'blue',
      display: 'flex',
      height: '100%'

    }

    return (
      <li style = {homeStyle} className="HomePage">
      <div>
        <div className="Cindy Leung">
          <img src={ProfilePicture} alt="" />
        </div>

          <p>Home Page is Rendered</p>
          </div>
      </li>
    );
  }
}
export default HomePage;

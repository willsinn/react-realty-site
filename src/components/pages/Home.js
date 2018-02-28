import React, { Component } from 'react';




class Home extends Component {


  render() {
    return (
      <li className="Home">
          homePageClicked(props) {
              return (
                  <button onClick={props.onClick}>
                    Home
                  </button>
                  );
                }
      </li>
    );
  }
}

    

export default Home;
/*
<a id="homePage" href="#" onClick={this.handleHomeClick}>
    homePageClicked(this, e)
  Home
</a>
*/

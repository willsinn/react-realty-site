import React, { Component } from 'react';




class Home extends Component {

    constructor() {
      super();
      this.state = {active: true};
      this.handleHomeClick = this.handleHomeClick.bind(this);
    }

    handleHomeClick(e) {
      e.preventDefault();
      this.setState(prevState => ({
        active: !prevState.active
      }));
    }

  render() {
    return (
      <li className="Home">
        <a id="homePage" href="#" onClick={this.handleHomeClick}>
          {this.state.active ? 'Hide' : 'Show'}
          Home
        </a>
        {this.props.page}    
      </li>


    );
  }
}



export default Home;

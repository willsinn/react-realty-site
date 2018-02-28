import React, { Component } from 'react';
import Home from '../pages/Home';
import Listings from '../pages/Listings';




class PageControl extends Component {


  constructor() {
    super();
    this.state = {active: true};
  }

  handleHomePageClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  

homePageClicked(e){
  this.state.page;
}


  constructor(props) {
  super(props)
  this.state = {
    active: {
      homePage: true,
      listingsPage: false,
    }
  }
}

activeFilter(e){
  const newObj = {
      [e.target.id]: !this.state.active[e.target.id]
    }
  this.setState({
    active: Object.assign({}, this.state.active, newObj)
  })
}



render(){
  return (
    <div className="PageControl">
    </div>
    );
  }
}

export default PageControl;

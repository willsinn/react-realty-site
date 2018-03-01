import React, { Component } from 'react';
import HomePage from './HomePage';
import ListingsPage from './ListingsPage';




class PageControl extends Component {
  constructor() {
    super();
    this.handleHomePageClick = this.handleHomePageClick.bind(this);
    this.handleListingsPageClick = this.handleListingsPageClick.bind(this);
    this.state = {isActivePage: false};
  }

handleHomePageClick() {
  this.setState({isActivePage: true});
}

handleListingsPageClick() {
  this.setState({isActivePage: false});
}

handleClick(e){
  e.preventDefault();
  if (this.onClick.isActivePage === true){
    return;
  } else {
    this.setState(prevState=> {
      isActivePage: !prevState.isActivePage

    })
  }
}

render(){
  const isActivePage = this.state.isActivePage;


  return (
    <div className="PageControl">
    </div>
    );
  }
}



export default PageControl;

// let page = null;
//   if (isActivePage)
//
// activeFilter(e){
// const newObj = {
//     [e.target.id]: !this.state.active[e.target.id]
//   }
// this.setState({
//   active: Object.assign({}, this.state.active, newObj)
// })
// }

import React, { Component } from 'react';
import Home from '../pages/Home';
import Listings from '../pages/Listings';
import styles from '../styles/NavBar.css';
import ReactDOM from 'react-dom';
//import Listings from '..pages/Listings';




class NavBar extends Component {
    render() {
      return (
        <div>

          id={ this.props.id }
          className={ this.props.active ? 'active': null}
          onClick={ this.props.handleClick } />
              { this.props.page }
       </div>
      // <li button className={(this.state.activePageClassName === "nav-page1") ? "active" : ""}></li>

  )}
}

class NavPages extends React.Component {

    constructor() {
    super();

    this.state = {
      pages: [
        {id: 1, page: 1},
        {id: 2, page: 2}
        ],
        activeID: null
      };
    }

    handleClick(e)  {
      if (this.state.activeID !== null) return;

      const id = parseInt(e.target.id);
      this.setState({
        activeID: id
      });
    }

    renderPages() {
      return (this.state.pages.map( pages =>
          <NavBar
              id={pages.id}
              active={pages.id === this.state.activeID}
              page={pages.page}
              handleClick={this.handleClick.bind(this)}
           /> ));
    }

    renderActiveIDPage() {
      return (this.state.activeID ? this.state.activeID : null);
    }
    render() {
    return (
        <div>
          {this.renderActiveIDPage()}
          {this.renderPages()}
        </div>
    );
  }
}

ReactDOM.render(<NavPages />, document.getElementById('active'));



      // <div>
      //   <nav id="navbar-container">
      //
      //     <ul>
      //       <li button
      //     // <ul className="nav-pages">
      //     //
      //     //   <li className={(this.state.activePageClassName === "nav-page2") ? "active" : ""}></li>
      //     //
      //
      //     //
      //     //
      //     // </ul>
      //   </nav>
      //   <Home />
      //
      // </div>

export default NavBar;
//------------ npm react-router-native

// import { NativeRouter } from 'react-router-native';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render((
//   <BrowserRouter>
//     <homeRouter />
//   </BrowserRouter>
// ), el)

// const homeRouter = () => (
//   <div>
//     <nav>
//       <Link to='../pages/Home'>'Home'</Link>
//     </nav>
//     <div>
//       <Route path='../pages/Home' component={Home}/>
//     </div>
//   </div>
// )


//import { NativeRouter, Route, Link } from 'react-router-native';

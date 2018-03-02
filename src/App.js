import React, { Component } from 'react';
//import { NativeRouter } from 'react-router-native';
//import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
//import Home from './components/pages/Home';
import NavBar from './components/layout/NavBar';
import styles from './components/styles/App.css';
import PageControl from './components/pages/PageControl';




class App extends Component {
  constructor(props) {
    super(props);
    this.handleNavigationClick = this.handleNavigationClick.bind(this);
    this.state = {activePage: 'home'};
  }

  handleNavigationClick(pageName) {
    console.log('pageName', pageName);
    return (event) => {
      event.preventDefault();
      console.log('event', event);
      this.setState({ activePage: pageName });
    }
  }

  render() {
    console.log('this.state', this.state);
    return (
      <div className="App">

        <Header />
        <NavBar onClick={this.handleNavigationClick} />
        <PageControl activePage={this.state.activePage} />
        <Footer />

      </div>
    );
  }
}

export default App;

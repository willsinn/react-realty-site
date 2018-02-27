import React, { Component } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import NavBar from './components/layout/NavBar';
import styles from './components/styles/App.css'




class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <NavBar />
        <Home />
        <Footer />

      </div>
    );
  }
}

export default App;

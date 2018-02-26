import React, { Component } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';




class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

          <Home />

        <Footer />

      </div>
    );
  }
}

export default App;

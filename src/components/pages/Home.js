import React, { Component } from 'react';


const page = document.getElementById('page');
page.id = Home(page.id)

class Home extends Component {


  render() {
    return (

      <div className='page' id='page-0'>
          This is the Home Page
      </div>
    );
  }
}


export default Home;

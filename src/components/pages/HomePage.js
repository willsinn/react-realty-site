import React, { Component } from 'react';




class HomePage extends Component {



  render() {
    return (
      <li className="HomePage">
        <div>
          {this.props.page.title}
          <p>Home Page is Rendered</p>
        </div>
      </li>
    );
  }
}
export default HomePage;

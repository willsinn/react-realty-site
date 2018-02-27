import React, { Component } from 'react';
import styles from '../styles/Footer.css';





class Footer extends Component {
  render() {
    return (
      <footer className="footer-layout">


        <div className="footer-col social">

          <ul className="social-buttons">
              <li className="social-col facebook">
                <a className="social-button" href="#">Facebook</a></li>

              <li className="social-col instagram">
                <a className="social-button" href="#">Instagram</a></li>

              <li className="social-col twitter">
                <a className="social-button" href="#">Twitter</a></li>
          </ul>

        </div>

        <div className="footer-col certifications">

          <ul className="cert-buttons">
              <li className="cert-col cert1">
                <a className="cert-button" href="#">Hunter</a></li>

              <li className="cert-col cert2">
                <a className="cert-button" href="#">HRBlock</a></li>

              <li className="cert-col cert3">
                <a className="cert-button" href="#">Cert1</a></li>

              <li className="cert-col cert4">
                <a className="cert-button" href="#">Cert2</a></li>
          </ul>

        </div>

      </footer>
    );
  }
}


export default Footer;

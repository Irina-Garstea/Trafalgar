import React from 'react';
import StyleFooter from './styled';
import Log from '../Logo';
import Image from 'next/image'



const FooterPage =() => {
    return (
        <StyleFooter>
  <footer className="footer">
  <div className="footer-links">
    <Log />
      <p className="p-footer">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
for everyone
<br />
<br />
<br />©Trafalgar PTY LTD 2020. All rights reserved</p>
</div>
    <div className="footer-links">
      <ul>
      <h3 className="list-footer">Company</h3>
        <li>
          <a href="/#footer">About</a>
        </li>
        <li>
          <a href="/#quotes">Testimonials</a>
        </li>
        <li>
          <a href="/#services">Find a doctor</a>
        </li>
        <li>
          <a href="/#content">Apps</a>
        </li>
      </ul>
      <div className="footer-links">
      <ul>
      <h3 className="list-footer">Region</h3>
        <li>
          <a href="/">Indonesia</a>
        </li>
        <li>
          <a href="/">Singapore</a>
        </li>
        <li>
          <a href="/">Hongkong</a>
        </li>
        <li>
          <a href="/">Canada</a>
        </li>
      </ul>
      <div className="footer-links">
      <ul>
      <h3 className="list-footer">Help</h3>
        <li>
          <a href="/#footer">Help center</a>
        </li>
        <li>
          <a href="/#quotes">Contact support</a>
        </li>
        <li>
          <a href="/#services">Instructions</a>
        </li>
        <li>
          <a href="/#content">How it works</a>
        </li>
      </ul>
      </div>
      </div>
      </div>
  </footer>
  </StyleFooter>
    );
};

export default FooterPage;
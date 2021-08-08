import React, { useEffect } from 'react';
import logo from '../images/Shared/logo-light.png';
import Navbar from './Navbar';
import facebook from '../images/Shared/icon-facebook.svg';
import instagram from '../images/Shared/icon-instagram.svg';
import twitter from '../images/Shared/icon-twitter.svg';
import pinterest from '../images/Shared/icon-pinterest.svg';
import youtube from '../images/Shared/icon-youtube.svg';
import { useGlobalContext } from '../context.js';
import { Link } from 'react-router-dom';

function Footer() {
  const { isContactPage } = useGlobalContext();

  return (
    <footer className={`${isContactPage ? ' footer footerContact' : 'footer'}`}>
      <section
        className={`${
          isContactPage
            ? 'footer-container footerContainer'
            : 'footer-container'
        }`}
      >
        <article className="footer-nav">
          <Navbar logoLight={logo} />
        </article>
        <article className="footer-info">
          <div className="footer-address footer-shared">
            <h3>Designo Central office</h3>
            <p>
              3886 Wellington Street
              <br /> Toronto, Ontario M9C 3J5
            </p>
          </div>
          <div className="footer-contact footer-shared">
            <h3>Contact Us (Central office)</h3>
            <h3>P : +1 253-863-8967</h3>
            <h3>M : contact@designo.co</h3>
          </div>
          <div className="footer-social">
            <img src={facebook} alt="Designo Facebook" />
            <img src={youtube} alt="Designo Youtube" />
            <img src={twitter} alt="Designo Twiiter" />
            <img src={pinterest} alt="Designo Pinterest" />
            <img src={instagram} alt="Designo Instagram" />
          </div>
        </article>

        {/* check if it the contact page to remove the learnmore */}

        {!isContactPage && (
          <section className="talk-about">
            <div className="talk-left">
              <h1>
                Let's talk about
                <br /> your projects
              </h1>
              <p>
                ready to take it to the next level? contact us today and find
                out
                <br /> how our expertise can help your business grow
              </p>
            </div>
            <Link to="/contact" className="talk-right">
              <button className="learnmore">GET IN TOUCH</button>
            </Link>
          </section>
        )}
      </section>
    </footer>
  );
}

export default Footer;

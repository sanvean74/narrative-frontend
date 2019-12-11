import React from 'react';
import { Link }  from 'react-router-dom';
import styles from './LandingPage.css';
import logo from './narrative-logo.png';

const LandingPage = () => {

  return (
    <div name="landingPage" className={styles.Parallax}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
      <section>
        <img src={logo} />
        <Link to={'/stories'}>Click To Get Started</Link>
      </section>
    </div>

  ); 
};

export default LandingPage;
import React from 'react';
import './Header.css'
import pic1 from '../../Images/topbar image2.jpg'

const Header = () => {
    return (
        <div className="header">
          <img src={pic1} alt="" className="imgwidth"  />

          <div className="backgroundcolor">
            <div className="words">
              <h2 id="h2">
                Welcome to the world of Learning
              </h2>
              <h1 id="h1">
                Learn World Class Courses with Certificates!
              </h1>
              <h5 id="h5">
                This is the world of globalization. Inhance your skills by completeting cources of various renowned professors of home and abroad with in a click. Pay less, earn certificates and be a competetitor.
              </h5>
              <button id="button" >
                View Courses
              </button>
            </div>
          </div>
        </div>
    );
};

export default Header;
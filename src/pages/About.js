import React from 'react';
import './About.css';
const About = () => (
  <div className='about'>
  <div className="title">
    <p>ABOUT US</p>
  </div>
  <div class="service-box">
        <div class="single-service">
        <img src={`${process.env.PUBLIC_URL}/images/img1.jpg`} alt="Home Logo"/>
            <div class="overlay"></div>
            <div class="service-desc">
            <h3>Client Matters</h3>
            <br/>
            <p>This is just an example paragraph. </p>
            </div>
        </div>
        <div class="single-service">
        <img src={`${process.env.PUBLIC_URL}/images/img2.jpg`} alt="Home Logo"/>
            <div class="overlay"></div>
            <div class="service-desc">
            <h3>Ready Possession</h3>
            <br/>
                <p>This is just an example paragraph. </p>
        </div>
        </div>
        <div class="single-service">
        <img src={`${process.env.PUBLIC_URL}/images/img3.jpg`} alt="Home Logo"/>
            <div class="overlay"></div>
            <div class="service-desc">
            <h3>World Class Amenities</h3>
            <br/>
            <p>This is just an example paragraph. </p></div>
        </div>
        <div class="single-service">
        <img src={`${process.env.PUBLIC_URL}/images/img4.jpg`} alt="Home Logo"/>
            <div class="overlay"></div>
            <div class="service-desc">
            <h3>Live Close to Nature</h3>
            <br/>
            <p>This is just an example paragraph. </p></div>
        </div>
  </div>
  </div>
);

export default About;
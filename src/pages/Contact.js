import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import { size } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faPaperPlane,faMapMarker} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter,faWhatsapp,faYoutube } from '@fortawesome/free-brands-svg-icons';
import Lottie from "lottie-react";
import Animation from '../components/Animation.json';
const Contact = () => {
  const style={
    width:'500px'
  }
  return (
      <div className='footer-container'>
      <div className='footer-subscription-heading'>
        <p>CONTACT</p>
        <h1>Visit Our Office Today </h1>
        </div>
        <div className='input-areas'>
          <form>
            <input type='email' name='email' placeholder='Your email' className='footer-input'/>
            <button buttonStyle="btn--style">Get Brochure</button>
          </form>
        </div>
        <div className='footer-content'>
        <div class="footer-left">
                <h1>Opening Hours</h1>
                <FontAwesomeIcon icon={faClock} className='icon'/> Monday to Friday- 9am to 9pm <br/>
                <FontAwesomeIcon icon={faClock} className='icon'/> Saturday to Sunday- 8am to 11pm
            </div>
            <div class="footer-right">
                <h1>Get In Touch</h1>
                XYZ, ABC colony, India, 4110XX <FontAwesomeIcon icon={faMapMarker} className='icon'/><br/>
                example@website.com <FontAwesomeIcon icon={faPaperPlane} className='icon'/><br/>
                +91 123456789X <FontAwesomeIcon icon={faPhone} className='icon'/><br/>
            </div>
            <div class="footer-middle">
            <Lottie style={style} animationData={Animation} className='animation'/>
            </div>
            <div class="social-links">
            
            <FontAwesomeIcon icon={faInstagram} className='icons'/>
            <FontAwesomeIcon icon={faTwitter} className='icons'/>
            <FontAwesomeIcon icon={faWhatsapp} className='icons'/>
            <FontAwesomeIcon icon={faYoutube} className='icons'/>
            <p>Demo Website</p>
        </div>
        </div>
        </div>
  );
};

export default Contact;


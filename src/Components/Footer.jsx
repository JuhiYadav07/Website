import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './Footer.css';

const Footer = () =>{

  return (
    <div className= 'Wrapper'>

    <div className='footer-container'>

      <div className='footer-first'>
        <div className='left-content'>
          <p>Dharmic Seva</p>
          <p>A Trusted Crowdfuncidng Platform for Rural Development.</p>
          <div className='social-icons'>
  <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
  <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
  <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
  <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
  <a href="https://youtube.com" target="_blank"><FaYoutube /></a>
</div>
</div>

        </div>

        <div className='middle'>
          <h3>Company</h3>
          <a href="#">About Us</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
      </div>

      <div className='right-section'>
        <h4>Contact</h4>
        <div className='Contact-div'>
          <div className='PhoneNo'>
            <FaPhone />
            <div>
              <p>Phone Number</p>
              <p>+91 7842541919</p>
            </div>
          </div>

          <div className='Email'>
            <FaEnvelope />
            <div>
              <p>Email Address</p>
              <a href='#'>info@missionrural.com</a>
            </div>
          </div>

        

          <div className='Location'>
            <FaMapMarkerAlt />
            <div>
              <p>Location</p>
              <p>101, Vipras Elite, Door No. :- 1-90/7/b/70/22A</p>
              <p>Street No:1, Patrika Nagar, HITEC City,</p>
              <p>Hyderabad, Telangana- 500081</p>
            </div>
          </div>
          </div>

        </div>
      </div>
    


    <div className='second-section'>
    <hr />
    <p>@ 2026 Dharmic Seva. All Rights Reserved.</p>
    <div className='whatsapp-float'>
  <FaWhatsapp />
</div>
    </div>
    </div>
  )
}

export default Footer;

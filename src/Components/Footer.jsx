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
          <p style={{ fontSize: '18px', marginBottom: '0' }}>A Trusted Crowdfunding Platform for Rural</p>
<p style={{ fontSize: '18px', marginTop: '0' }}>Development.</p>




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
            <FaPhone className='contacticon'/>
            <div>
              <p style ={{marginBottom: '0'}}>Phone Number</p>
              <p style ={{marginTop: '0'}}>+91 7842541919</p>
            </div>
          </div>

          <div className='Email'>
            <FaEnvelope className='contacticon'/>
            <div>
              <p style ={{marginBottom: '0'}}>Email Address</p>
              <a href='#'>info@missionrural.com</a>
            </div>
          </div>

        

          <div className='Location'>
            <FaMapMarkerAlt className='contacticon'/>
            <div>
              <p style={{ marginBottom: '0' }}>Location</p>
              <p style={{ marginTop: '0', marginBottom: '0' }}>101, Vipras Elite, Door No. :- 1-90/7/b/70/22A</p>
              <p style={{ marginTop: '0', marginBottom: '0' }}>Street No:1, Patrika Nagar, HITEC City,</p>
              <p style={{ marginTop: '0', marginBottom: '0' }}>Hyderabad, Telangana- 500081</p>
            </div>
          </div>
          </div>

        </div>
      </div>
    


    <div className='second-section'>
    <hr />
  <p>@ 2026 Dharmic Seva. All Rights Reserved.</p>
    
  <FaWhatsapp className='whatsapp-float'size={40}/>

    
    </div>
    </div>
  )
}

export default Footer;

import React from 'react';
import { FaHeart, FaPlay, FaHandHoldingHeart, FaUsers, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa'
import trustedBg from '../../assets/trusted-bg.jpeg';
import './Trusted.css'

const Trusted = () => {
  return (
    <div className='Trusted' style={{ 
      backgroundImage: `url(${trustedBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '400px',
      backgroundRepeat: 'no-repeat',
      width: '100%'
    }}>

      <div className='trusted-left'>
        <div className='Icon-Text'>
          <p><FaHeart color="#FF6B00" /></p>
          <p>Turning kindness into Action</p>
        </div>
        <h2>India's Most Trusted Rural Giving Platform</h2>
        <p>Join 25+ Lakhs donors who are creating lasting impact in rural communities.</p>
        <div className='Trust-Btn'>
          <button className='btn-explore'>Explore Campaigns</button>
          <div className='play-icon'>
            <FaPlay color='#FF6B00' />
            <button className='btn-play'>How It Works</button>
          </div>
        </div>
      </div>

      <div className='trusted-right'>
        <div className='row1'>
          <div className='box1'>
            <div className='box-icon'><FaHandHoldingHeart color="#FF6B00" /></div>
            <div className='box-text'>
              <p>₹400+ Cr</p>
              <p>Raised</p>
            </div>
          </div>
          <div className='box2'>
            <div className='box-icon'><FaUsers color="#FF6B00" /></div>
            <div className='box-text'>
              <p>25 Lakhs+</p>
              <p>Donors</p>
            </div>
          </div>
        </div>

        <div className='row2'>
          <div className='box3'>
            <div className='box-icon'><FaShieldAlt color="#FF6B00" /></div>
            <div className='box-text'>
              <p>10,000+</p>
              <p>Lives Impacted/ Rural Causes Supported</p>
            </div>
          </div>
          <div className='box4'>
            <div className='box-icon'><FaMapMarkerAlt color="#FF6B00" /></div>
            <div className='box-text'>
              <p>50+</p>
              <p>Projects Across India</p>
            </div>
          </div>
        </div>

        <div className='donor-ticker'>
          <p>🟠 1,044 donors supported rural causes this month</p>
        </div>

      </div>

    </div>
  )
}

export default Trusted;
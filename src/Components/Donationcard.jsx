import React from 'react';
import { FaHeart, FaUsers } from "react-icons/fa";
import { FaShieldAlt, FaHeart } from "react-icons/fa";
import { MdReceiptLong, MdPeople } from "react-icons/md";

const Donationcard = () => {
  return (
  <div className='Donation'>
    <div className='Raised-Donors'>

      <div className='Raised'>
      <FaHeart />
      <div className='Raised-content'>
        <p>₹ 0</p>
        <p>Raised</p>
      </div>
      </div>

      <div className='Donors'>
      <FaUsers />
      <div className='Don-content'>
        <p>0</p>
        <p>Donors</p>
      </div>
      </div>

      </div>

      <div className='Raised-percentage'>
        <p>Raised</p>
        <p>0% <a href='#'>i</a></p>
      </div>

      <div className='progress-bar'></div>
      <p>Goal:₹ 1,00,000</p>

      <div className='Donation-price'>
        <p> <FaHeart /> Most Donated</p>
        <div className='prices'>
          <p>₹ 100</p>
          <p>₹ 200</p>
          <p>₹ 300</p>
          <p>custom</p>
        </div>

        <button>Donate Now ₹ 200</button>
      </div>

      <div className='bottom'>
        <div className='Shield'>
        <FaShieldAlt />
        <p>100% Secure Payments</p>
        </div>

        <div className='receipt'>
        <MdReceiptLong />
        <p>80G Tax Benefit</p>
        </div>

        <div className='people'>
        <MdPeople />
        <p>Transparent & Trusted</p>
        </div>

        <div className='heart'>
        <FaHeart />
        <p>Reach the Right People</p>
        </div>

      </div>
    
  </div>
  )
}
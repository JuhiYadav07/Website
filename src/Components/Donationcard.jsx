import React from 'react';
import { FaHeart,FaRegHeart, FaUsers } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { MdReceiptLong, MdPeople } from "react-icons/md";
import './Donationcard.css';

const Donationcard = () => {
  return (
  <div className='Donation'>
    <div className='Raised-Donors'>

      <div className='Raised'>
      <FaHeart className = "orange-text top-icon"/>
      <div className='Raised-content'>
        <p className = "orange-text">₹ 0</p>
        <p>Raised</p>
      </div>
      </div>


      <div className='separator'></div> 


      <div className='Donors'>
      <FaUsers className = "orange-text top-icon"/>
      <div className='Don-content'>
        <p className = "orange-text">0</p>
        <p>Donors</p>
      </div>
      </div>

      </div>

      <div className='Raised-percentage'>
        <p className = "i-text">Raised:</p>
        <p style= {{color : "#16a34a",fontSize: '20px'}}>0% <a href='#' className = "orange-text i-icon">i</a></p>
      </div>

      <div className='progress-bar'></div>
      <p className = "i-text">Goal:<span className = "orange-text"> ₹ 1,00,000</span></p>
      <hr />

      <div className='Donation-price' style={{position: 'relative'}}>
      <div style={{color: "#16a34a", position: 'absolute', top: '0', left: '40%', transform: 'translateX(-80%)',fontSize: '12px'}}>
     <FaRegHeart /> Most Donated
      </div>


        <div className='prices'>
          <p className = "i-text ">₹ 100</p>

       <p className="i-text selected-price" >₹ 200</p>

          <p className = "i-text">₹ 300</p>

          <p className = "i-text">custom</p>
        </div>

        <button className = "donate-btn">Donate Now ₹ 200</button>
      </div>

      <div className='bottom'>
        <div className='Shield'>
        <FaShieldAlt className = "orange-text bottom-icon" />
        <p>100% Secure Payments</p>
        </div>

        

        <div className='receipt'>
        <MdReceiptLong className = "orange-text bottom-icon"/>
        <p>80G Tax Benefit</p>
        </div>

   

        <div className='people'>
        <MdPeople className = "orange-text bottom-icon" />
        <p>Transparent & Trusted</p>
        </div>

         

        <div className='heart'>
        <FaRegHeart className = "orange-text bottom-icon" />
        <p>Reach the Right People</p>
        </div>

      </div>
    
  </div>
  )
}

export default Donationcard;
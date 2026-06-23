import React from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import './Firstdonorbanner.css';

const Firstdonorbanner = () =>{

  return (
    <div className='Maindonor'>
      <span className="heart-icon">
      <FaHeart color="#e65c00" />
      </span>
      <div className='donor-content'>
        <h3>Be the <span style={{color: '#F25C00'}}> first </span> to make a difference</h3>
        <p>Be the first donor and inspire others </p>
        <p className='para'>to support this cause.</p>

        <div className='Button'>

          <button className='donor-btn'>
            Be the First Donor
            <FaRegHeart color= "white" />
          </button>

          <button className='share-btn'>
            <FaShareAlt />
            Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default Firstdonorbanner;
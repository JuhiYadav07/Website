import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const Firstdonorbanner = () =>{

  return (
    <div className='Maindonor'>
      <FaHeart color="#e65c00" />
      <div className='donor-content'>
        <h3>Be the first to make a difference</h3>
        <p>Be the first donor and inspire others to support this cause.</p>

        <div className='Button'>

          <button className='donor-btn'>
            Be the First Donor
            <FaHeart />
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
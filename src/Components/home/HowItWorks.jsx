import React from 'react';
import { FaSearch, FaLock, FaHandHoldingHeart, FaChartLine } from 'react-icons/fa';
import './HowItWorks.css';

const HowItWorks = () => {

  return (
    <div className='Works'>
      <div className="how-title">
  <span style={{color: '#FF6B00'}}>——</span>
  <h2>How DharmicSeva Works</h2>
  <span style={{color: '#FF6B00'}}>——</span>
</div>

    <div className= "Steps-Container">

    <div className="Card1">
      <div className = "step-icon">
        <FaSearch />
      </div>
      <div>
        <h1 className='Number'>01</h1>
        <h3>Choose a Cause</h3>
        <p>Browse verified Causes and select a cause to support</p>
      </div>
      </div>

       <div className="step-arrow">→</div>  



       <div className="Card2">
      <div className = "Lock-icon">
        <FaLock />
      </div>
      <div>
        <h1 className='Number'>02</h1>
        <h3>Donate Securely</h3>
        <p>Choose an amount and make your donation</p>
      </div>
      </div>

       <div className="step-arrow">→</div>  

       <div className="Card3">
      <div className = "HandHold-icon">
        <FaHandHoldingHeart />
      </div>
      <div>
        <h1 className='Number'>03</h1>
        <h3>We Make Impact</h3>
        <p>Your donation reaches those who need it most</p>
      </div>
      </div>

       <div className="step-arrow">→</div>  

       <div className="Card4">
      <div className = "Chart-icon">
        <FaChartLine />
      </div>
      <div>
        <h1 className='Number'>04</h1>
        <h3>See the Change</h3>
        <p>Track your impact with regular updates</p>
      </div>
      </div>


    </div>
    </div>
  )

}


export default HowItWorks;

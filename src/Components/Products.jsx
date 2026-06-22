import React from 'react';
import { FaStar } from "react-icons/fa";

const Products = () =>{

  return (
    <div className='Product-container'>
      <div className='section-heading'>
      <span className='dot'>•</span>
      <span className='line'></span>
      <h2>PRODUCTS</h2>
      <span className='line'></span>
      <span className='dot'>•</span>
      </div>

      <div className='product-img'>
        <div className='main-img'>
          <FaStar color="#e65c00" />
          <span>Most Impactful</span>
        </div>
      </div>

      <div className='product-content'>
        <h3>Laxmi Seva</h3>
        <p>laxmi locket</p>
        <div className='amount'>
          <p>₹123</p>
          <button>Add</button>
        </div>
      </div>
    </div>
  )
}
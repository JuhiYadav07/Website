import React from 'react';
import { FaStar } from "react-icons/fa";
import './Products.css';

const Products = () =>{

  return (
    <div className='Product-container'>
      <div className='section-heading'>
      <span className='dot' ></span>
      <span className='line'></span>
      <h2>P R O D U C T S</h2>
      <span className='line'></span>
      <span className='dot'></span>
      </div>

      <div className='product-description'>
        <div className='main-img'>
          <span className='badge'>
          <FaStar color="#e65c00" />
          Most Impactful
          </span>
          <img src= "https://images.unsplash.com/photo-1673706923275-33b288ccd5e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvZCUyMGltYWdlJTIwd2l0aCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D">
        </img>
      
        </div>
        

      <div className='product-content'>
        <h3>Laxmi Seva</h3>
        <p style={{fontWeight: '500'}}>laxmi locket</p>
        <hr style={{border: '1px solid #e0e0e0', margin: ' 0'}} />
        <div className='amount'>
          <p style={{fontWeight: '500'}}>₹123</p>
          <button className = 'add-btn'>Add</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Products;
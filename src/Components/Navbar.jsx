import React from 'react';

const Navbar = () => {
  return (
    <div className='Navbar-container'>
        <h3>Dharmic Seva</h3>

        <div className='Nav-items'>
          <a href='#'>Home</a>
          <a href='#'>About Us </a>
          <a href='#'>Explore Campaigns</a>
        </div>

        <button>Login</button>
    </div>
  )
}

export default Navbar;
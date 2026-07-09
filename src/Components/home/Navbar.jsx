import React, { useState } from 'react';
import { GiLotus } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const navigate = useNavigate();

  const links = ['Home', 'Campaigns', 'Causes', 'Impact', 'About Us', 'Blog'];

  const handleClick = (link) => {
    setActive(link);

    switch (link) {
      case 'Home':
        navigate('/');
        break;
      case 'Campaigns':
        navigate('/campaign');
        break;
      case 'Causes':
        navigate('/causes');
        break;
      case 'Impact':
        navigate('/impact');
        break;
      case 'About Us':
        navigate('/about');
        break;
      case 'Blog':
        navigate('/blog');
        break;
      default:
        break;
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <div className="logo-icon">
          <GiLotus
            style={{
              fontSize: '2.25rem',
              color: '#E65C00',
            }}
          />
        </div>

        <div className="logo-text">
          <span className="brand-name">Dharmicseva</span>
          <span className="tagline">Seva • Sanskar • Samarpan</span>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link}>
            <a
              href="/"
              className={active === link ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link);
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="navbar-actions">
        <span className="search-icon">
          <FiSearch
            style={{
              fontSize: '1.25rem',
              color: '#555',
              cursor: 'pointer',
            }}
          />
        </span>

        <button className="btn-login">Login</button>
        <button className="btn-donate">Donate Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
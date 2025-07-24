import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activePage, setActivePage] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-brand">
          <svg width="30" height="30" viewBox="0 0 30 30">
            <circle cx="15" cy="15" r="15" fill="currentColor"/>
          </svg>
        </div>

        <div className="mobile-brand">
          <span className="zoro">ZORO</span>
          <span className="tek">TEK</span>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a 
            href="#home" 
            className={activePage === 'home' ? 'active' : ''}
            onClick={() => setActivePage('home')}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={activePage === 'about' ? 'active' : ''}
            onClick={() => setActivePage('about')}
          >
            About
          </a>
          <a 
            href="#services" 
            className={activePage === 'services' ? 'active' : ''}
            onClick={() => setActivePage('services')}
          >
            Works
          </a>
          <a 
            href="#pricing" 
            className={activePage === 'pricing' ? 'active' : ''}
            onClick={() => setActivePage('pricing')}
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            className={activePage === 'contact' ? 'active' : ''}
            onClick={() => setActivePage('contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
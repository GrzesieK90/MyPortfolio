import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/Logo.png';
import * as Icon from 'react-bootstrap-icons';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-left">
          <img src={Logo} id='Logo' alt='Logo' height='50px'/>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <Icon.XLg size={24} /> : <Icon.List size={24} />}
        </button>

        <ul className={`nav-elements ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              <Icon.HouseDoorFill id='li1' /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tech" onClick={() => setIsOpen(false)}>
              <Icon.ListColumns id='li1' /> Technologies
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>
              <Icon.TerminalFill id='li1' /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              <Icon.InfoCircleFill id='li1'/> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              <Icon.ChatSquareTextFill id='li1' /> Contact
            </NavLink>
          </li>
        </ul>

        <div className="nav-right">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
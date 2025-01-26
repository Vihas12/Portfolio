import React from 'react'
import { motion } from 'framer-motion';
import '../Style/Header.css';

function Header() {
  return (
    <div>
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
  <div className="navbar-content">
    <ul className="navbar-links">
        <li><a href="#home" className="menu-item">Home</a></li>
        <li><a href="#about" className="menu-item">About</a></li>
        <li><a href="#projects" className="menu-item">Projects</a></li>
        <li><a href="#contact" className="menu-item">Contact</a></li>
      </ul>
    </div>
      </motion.nav>
    </div>
  )
}

export default Header;
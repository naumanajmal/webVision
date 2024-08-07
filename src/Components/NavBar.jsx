import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.svg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 px-10 relative">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="Logo" />
        
        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-4 border-blue border-[1px] rounded-full w-3/6 items-center justify-evenly p-1">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About Us" />
          <NavItem to="/contact" label="Contact Us" />
          <NavItem to="/portfolio" label="Portfolio" />
        </div>
        
        {/* Mobile menu button */}
        <button className="lg:hidden z-50" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Get Started button */}
        <button className="hidden lg:block border-[1px]   text-blue px-4 py-2 rounded-full hover:bg-blue hover:text-white text-xs">
          Get Started
        </button>
      </div>
      
      {/* Mobile menu */} 
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0  h-1/2   z-40 flex items-center justify-center">
          <div className="flex flex-col space-y-4 bg-white shadow-md w-4/5 px-5 py-5 rounded-md">
            <NavItem to="/" label="Home" onClick={toggleMenu} />
            <NavItem to="/about" label="About Us" onClick={toggleMenu} />
            <NavItem to="/contact" label="Contact Us" onClick={toggleMenu} />
            <NavItem to="/portfolio" label="Portfolio" onClick={toggleMenu} />
            <button className="border-[1px] text-white px-4 py-2 rounded-md w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ to, label, onClick }) => (
  <Link
    to={to}
    className="hover:bg-blue hover:text-white text-center px-4 py-2 rounded-full transition duration-300 w-full text-blue text-xs"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
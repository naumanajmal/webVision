import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
        <img src={Logo} alt="Logo" className="h-12" /> {/* Adjust the height as needed */}
        </Link>
      
        
        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-4 border-blue border-[1px] rounded-full w-3/6 items-center justify-evenly p-1">
          <NavItem to="/" label="Home" isActive={location.pathname === '/'} />
          <NavItem to="/portfolio" label="Portfolio" isActive={location.pathname === '/portfolio'} />
          <NavItem to="/about" label="About Us" isActive={location.pathname === '/about'} />
          <NavItem to="/contact_us" label="Contact Us" isActive={location.pathname === '/contact_us'} />
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
        <Link to={"/contact_us"} className="hidden lg:block border-[1px] font-Mona text-blue px-4 py-2 rounded-full hover:bg-blue hover:text-white text-xs">
          Get Started
        </Link>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 flex items-center justify-center">
          <div className="flex flex-col space-y-4 w-4/5 px-5 py-5">
            <NavItem to="/" label="Home" onClick={toggleMenu} isActive={location.pathname === '/'} />
            <NavItem to="/portfolio" label="Portfolio" onClick={toggleMenu} isActive={location.pathname === '/portfolio'} />
            <NavItem to="/about" label="About Us" onClick={toggleMenu} isActive={location.pathname === '/about'} />
            <NavItem to="/contact_us" label="Contact Us" onClick={toggleMenu} isActive={location.pathname === '/contact_us'} />
            <Link to="/contact_us" className="border-[1px] text-blue-500 bg-white px-4 py-2 font-Mona rounded-full w-full text-center" onClick={toggleMenu}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ to, label, onClick, isActive }) => (
  <Link
    to={to}
    className={`font-Mona text-center px-4 py-2 rounded-full transition duration-300 w-full text-xs ${
      isActive ? 'bg-blue-500 text-white bg-blue' : 'text-blue hover:bg-blue hover:text-white'
    }`}
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
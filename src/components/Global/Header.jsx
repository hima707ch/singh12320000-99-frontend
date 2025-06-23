import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DreamHome</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8" id="Header_3">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Home</Link>
            <Link to="/properties" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Properties</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Contact Us</Link>
            <div className="flex items-center space-x-4" id="Header_4">
              <Link to="/login" className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium">Login</Link>
              <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg">
                Register
              </Link>
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700" id="Header_5">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4" id="Header_6">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Home</Link>
              <Link to="/properties" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Properties</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Contact Us</Link>
              <Link to="/login" className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium">Login</Link>
              <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-center">
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
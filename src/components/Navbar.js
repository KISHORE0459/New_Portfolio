import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 pt-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Title */}
        <div className="text-2xl font-bold">
          <Link to="/">KISHORE</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:space-x-6 text-2xl">
          <Link to="/" className="text-lg hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/about" className="text-lg hover:text-blue-400 transition-colors">About</Link>
          <Link to="/skills" className="text-lg hover:text-blue-400 transition-colors">Skills</Link>
          <Link to="/projects" className="text-lg hover:text-blue-400 transition-colors">Projects</Link>
          <Link to="/resume" className="text-lg hover:text-blue-400 transition-colors">Resume</Link>
          <Link to="/contact" className="text-lg hover:text-blue-400 transition-colors">Contact</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links - Display Below Toggle Button */}
      {isOpen && (
        <div className="flex flex-col items-end pr-6 mt-4 pl-4 space-y-2 md:hidden">
          <Link to="/" onClick={toggleMenu} className="text-lg hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="text-lg hover:text-blue-400 transition-colors">About</Link>
          <Link to="/skills" onClick={toggleMenu} className="text-lg hover:text-blue-400 transition-colors">Skills</Link>
          <Link to="/projects" onClick={toggleMenu} className="text-lg hover:text-blue-400 transition-colors">Projects</Link>
          <Link to="/resume" onClick={toggleMenu} className="text-lg hover:text-blue-400 transition-colors">Resume</Link>
          <Link to="/contact" onClick={toggleMenu} className="text-lg hover:text-blue-400 transition-colors">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

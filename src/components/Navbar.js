import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-3"> 
      <div className="container mx-auto flex justify-center items-center">
        {/* Flex container to center everything */}
        <div className="flex items-center justify-between w-full">
          <div className="text-white text-lg">My Portfolio</div>
          <button
            onClick={toggleMenu}
            className="text-white md:hidden focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <ul
          className={`flex flex-col md:flex-row md:items-center md:space-x-6 mt-2 md:mt-0 ${
            isOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <li className="py-1">
            <Link to="/" className="text-white hover:text-blue-300">Home</Link>
          </li>
          <li className="py-1">
            <Link to="/about" className="text-white hover:text-blue-300">About</Link>
          </li>
          <li className="py-1">
            <Link to="/resume" className="text-white hover:text-blue-300">Resume</Link>
          </li>
          <li className="py-1">
            <Link to="/projects" className="text-white hover:text-blue-300">Projects</Link>
          </li>
          <li className="py-1">
            <Link to="/contact" className="text-white hover:text-blue-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

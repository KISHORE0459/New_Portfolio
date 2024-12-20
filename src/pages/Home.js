import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';
import myImage from '../images/my_image.png'; // Import your image
import '../index.css';

const MainPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      {/* Container for the two sections */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-4">Kishore</h1>
          <h2 className="text-2xl text-gray-400 mb-4">Web Developer</h2>
          
          <Link to="/contact">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none mb-4">
              Hire Me
            </button>
          </Link>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/kishoreb26" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-blue-400" size={30} />
            </a>

            {/* Gmail */}
            <a href="mailto:kishorebabu200409@gmail.com">
              <FaEnvelope className="text-white hover:text-red-400" size={30} />
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/lonely_wolf.k?igsh=azhkeXVzYTJ6MXdy" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-pink-400" size={30} />
            </a>
            <a href="https://github.com/KISHORE0459" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white hover:text-black" size={30} />
            </a>
          </div>
        </div>

        {/* Right Section with Image and RGB Effects */}
        <div className="w-full md:w-1/2 text-center">
          <img
            src={myImage}
            alt="Kishore"
            className="w-80 h-80 object-cover rounded-full mx-auto animate-glow mt-10 lg:mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;

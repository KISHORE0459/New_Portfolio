import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="h-auto lg:h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <h1 className="text-5xl font-bold mt-5 mb-10 lg:mt-5 lg:mb-10  text-white">Kishore</h1>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section: Name, Education, Skills, Work Experience, Contact */}
        <div className="w-full text-center md:text-left text-white flex flex-row items-start justify-evenly flex-wrap scroll-ml-10">
          {/* Name */}
          {/* Educational Details */}
          <div className='flex flex-col justify-center items-center'>
            <h2 className="text-3xl font-semibold mb-2 text-blue-500">Education</h2>
            <div className="text-lg mb-4 flex flex-col items-start">
              <h3>B.E in Information Technology,</h3>
              <h3>Final Year</h3>
              <h3>Annamalai University</h3>
            </div>
          </div>

          {/* Work Experience */}
          <div className='flex flex-col items-center justify-center'>
            <h2 className="text-3xl font-semibold mb-2 text-blue-500">Work Experience</h2>
            <div className="text-lg mb-4 flex flex-col items-start">
              <h2 className='text-2xl'>Title :</h2>
              <h3 className='ml-7'>Software Development Intern</h3>
              <h2 className='text-2xl'>Company</h2>
              <h3 className='ml-7'>Murven Infotech Design Solutions LLP</h3>
              <h2 className='text-2xl'>Duration</h2>
              <h3 className='ml-7'>Apr 2024 to Sep 2024 - 4 Months</h3>
              <h2 className='text-2xl'>Tools Used</h2>
              <h3 className='ml-7'>JavaScript , HTML , CSS , AWS S3 </h3>
              <h3 className='ml-7'>Git , VS Code , Figma</h3>
            </div>
          </div>
          {/* WhatsApp Contact Button */}
          <a href="https://wa.me/+916238418876" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 focus:outline-none flex items-center space-x-2">
              <FaWhatsapp size={20} />
              <span>Contact Me on WhatsApp</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

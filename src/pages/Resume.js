import React from 'react';
import resumePDF from '../files/resume.pdf'; // Import your resume PDF

const Resume = () => {
  return (
    <div className="h-auto flex flex-col items-center justify-center bg-gray-900 p-4 pt-12">
      <h1 className="text-4xl font-bold text-white mb-6">My Resume</h1>
      
      {/* Embed PDF */}
      <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-md">
        <iframe 
          src={resumePDF} 
          title="Resume"
          width="100%" 
          height="600px" 
          className="border-none"
        />
      </div>

      {/* Download Button */}
      <a href={resumePDF} download="resume.pdf" className="mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none">
          Download My Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;

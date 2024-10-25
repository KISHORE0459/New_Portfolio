import React from 'react';
import Murven_Certificate from '../images/Murven_Certificate.png';
import Java_Certificate from '../images/Java_Certificate.jpeg';
import Fullstack_Certificate from '../images/Fullstack_Certificate.jpeg';
import Web_Certificate from '../images/Web_Certificate.jpeg';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Skills = () => {
  const skills = {
    frontend: [
      { name: "React", level: 3 },
      { name: "HTML", level: 3 },
      { name: "CSS", level: 3 },
      { name: "JavaScript", level: 3 },
    ],
    backend: [
      { name: "Node.js", level: 2 },
      { name: "Express", level: 2 },
      { name: "MongoDB", level: 2 },
    ],
    languages: [
      { name: "Python", level: 3 },
      { name: "C++", level:2},
      { name: "Java", level: 2 },
      { name: "SQL", level: 2 },
    ],
    softSkills: ["Problem-solving", "Communication", "Teamwork"],
  };

  const certificates = [
    { title: "Software Development Internship", organization: "Murven Design Solutions" , imgpath:Murven_Certificate },
    { title: "Java Certificate", organization: "Besent Technology" , imgpath:Java_Certificate },
    { title: "Full Stack Development Certification", organization: "RUSA", imgpath: Fullstack_Certificate },
    { title: "WEB Desining", organization: "Annamalai Univercity" , imgpath:Web_Certificate },
  ];

  // Helper function to render star rating
  const renderStars = (level) => (
    Array.from({ length: 3 }, (_, i) => (
      i < level ? <FaStar key={i} className="text-yellow-500" /> : <FaRegStar key={i} className="text-gray-300" />
    ))
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Skills & Achievements</h1>
      
      {/* Skills Section */}
      <div className="w-screen lg:w-3/4 bg-gray-800 p-6 rounded-lg shadow-lg mb-10 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>

        {/* Frontend Skills */}
        <div className='flex flex-row justify-between flex-wrap'>
            <div className="mb-6 w-80 m-10">
                <h3 className="text-xl font-bold mb-2">Frontend Skills</h3>
                {skills.frontend.map(skill => (
                    <div key={skill.name} className="flex justify-between">
                    <span>{skill.name}</span>
                    <div className='flex flex-row'>{renderStars(skill.level)}</div>
                    </div>
                ))}
            </div>

            {/* Backend Skills */}
            <div className="mb-6 w-80 m-10">
                <h3 className="text-xl font-bold mb-2">Backend Skills</h3>
                {skills.backend.map(skill => (
                    <div key={skill.name} className="flex justify-between">
                    <span>{skill.name}</span>
                    <div className='flex flex-row'>{renderStars(skill.level)}</div>
                    </div>
                ))}
            </div>

            {/* Languages */}
            <div className="mb-6 w-80 m-10">
                <h3 className="text-xl font-bold mb-2">Programming Languages</h3>
                {skills.languages.map(skill => (
                    <div key={skill.name} className="flex justify-between">
                    <span>{skill.name}</span>
                    <div className='flex flex-row'>{renderStars(skill.level)}</div>
                    </div>
                ))}
            </div>

            {/* Soft Skills */}
            <div className='mb-6 w-80 m-10'>
                <h3 className="text-xl font-bold mb-2">Soft Skills</h3>
                <ul className="list-disc list-inside">
                    {skills.softSkills.map((softSkill, index) => (
                    <li key={index}>{softSkill}</li>
                    ))}
                </ul>
            </div>
        </div>
      </div>

      {/* Certificates and Achievements Section */}
      <div className="w-screen md:w-3/4 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Certificates & Achievements</h2>
        <div className="space-y-4 flex flex-row flex-wrap">
          {certificates.map((certificate, index) => (
            <div key={index} className="flex flex-col flex-wrap w-96 h-100 lg:w-96 m-10 p-5 justify-between items-center bg-white text-black rounded-sm">
              <img src={certificate.imgpath} alt={certificate.title} className='h-72 w-auto'/>  
              <span className="font-bold">{certificate.title}</span>
              <span className="font-bold">{certificate.organization}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

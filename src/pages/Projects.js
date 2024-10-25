import React from 'react';
import { FaGithub } from 'react-icons/fa';
import calc from '../images/calculator.png';
import merger from '../images/image_merger.png';
import portfolio from '../images/portfolio.png';
import quiz from '../images/quiz.png'
import dreamik from '../images/dreamikai.png'

const projects = [
  {
    title: 'DreamikAI Website',
    description: 'It is Ecommerce site that I Worked On my Internship for a Stationary Shop',
    tools: 'HTML , CSS , Javascript , AWS S3 , API , VSCode , Git , Figma',
    gitlink:'https://github.com/KISHORE0459/DreamikAI.git',
    image: dreamik, 
  },
  {
    title: 'Quiz App',
    description: 'It is a Simple Quiz app that have some questuions and answers stored in it and ask the users questions and Evaluate it',
    tools: 'HTML , CSS , Javascript , Node JS',
    gitlink:'https://github.com/KISHORE0459/quiz_app.git',
    image: quiz,
  },
  {
    title: 'PortFolio',
    description: 'It is a Simple Portfolio website',
    tools: 'HTML , CSS , Javascript , VSCode , Git',
    gitlink:'https://github.com/KISHORE0459/portfolio.git',
    image: portfolio, 
  },
  {
    title: 'Image Merger',
    description: 'In this I merge Two Separate Images Into a Single Image And Download and Modify it',
    tools: 'HTML , CSS , JavaScript , JSPdf , HTML2Canvas , VSCode , Git',
    gitlink:'https://github.com/KISHORE0459/imagemerger.git',
    image: merger,
  },
  {
    title: 'Calculator',
    description: 'Its a first Project that i Done a simple Calculator',
    tools: 'HTML , CSS , Javascript , VSCode , Git',
    gitlink:'https://github.com/KISHORE0459/calculator.git',
    image: calc,
  },
];

const Projects = () => {
  return (
    <div className="h-auto flex flex-col items-center justify-center bg-gray-900 p-4">
      <h1 className="text-4xl font-bold text-white mb-6">My Projects</h1>
      <div className="flex flex-row flex-wrap justify-evenly items-center">
        {projects.map((project, index) => (
          <div className="flex flex-col justify-center items-center w-80 h-90 rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 transform hover:scale-105 m-10">
            <div
              key={index}
              className="flex flex-col justify-center items-center relative group w-80 h-72 rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 transform hover:scale-105 m-10"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-auto h-64"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="mb-2">{project.description}</p>
                <p className="italic">{project.tools}</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <a href={project.gitlink} target="_blank" rel="noopener noreferrer" className='flex flex-row m-4 hover:text-blue-400'>
                  <FaGithub className="text-black hover:text-black" size={30} />
                  <h3 className='ml-2'>Git Link</h3>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'Description of Project One. It does amazing things!',
    tools: 'React, Node.js',
    image: 'path/to/project-one-image.jpg', // Update with the correct image path
  },
  {
    title: 'Project Two',
    description: 'Description of Project Two. It solves many problems!',
    tools: 'HTML, CSS, JavaScript',
    image: 'path/to/project-two-image.jpg', // Update with the correct image path
  },
  {
    title: 'Project Three',
    description: 'Description of Project Three. A remarkable project!',
    tools: 'MongoDB, Express',
    image: 'path/to/project-three-image.jpg', // Update with the correct image path
  },
  {
    title: 'Project Four',
    description: 'Description of Project Four. Another innovative solution!',
    tools: 'AWS, Python',
    image: 'path/to/project-four-image.jpg', // Update with the correct image path
  },
  {
    title: 'Project Five',
    description: 'Description of Project Five. It’s quite user-friendly!',
    tools: 'Java, Spring Boot',
    image: 'path/to/project-five-image.jpg', // Update with the correct image path
  },
];

const Projects = () => {
  return (
    <div className="h-auto flex flex-col items-center justify-center bg-gray-900 p-4">
      <h1 className="text-4xl font-bold text-white mb-6">My Projects</h1>
      <div className="flex flex-row flex-wrap justify-evenly items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group w-80 h-80 rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 transform hover:scale-105 m-10"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="mb-2">{project.description}</p>
              <p className="italic">{project.tools}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';
import ProjectCard from '../ui/project-card';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment gateway integration.",
    imageUrl: "/img/project-ecommerce.png", // Placeholder image
    projectUrl: "#",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    description: "A responsive web application for managing tasks, with drag-and-drop functionality, due dates, and real-time updates.",
    imageUrl: "/img/project-task.png", // Placeholder image
    projectUrl: "#",
    tags: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and contact information, built with modern web technologies.",
    imageUrl: "/img/project-portfolio.png", // Placeholder image
    projectUrl: "#",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

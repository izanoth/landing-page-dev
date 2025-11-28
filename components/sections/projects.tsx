'use client';
import React from 'react';
import ProjectCard from '../ui/project-card';
import { useClientTranslation } from '@/lib/i18n/use-client-translation';
import { useLang } from "@/lib/i18n/context";

const Projects = () => {
  const { lng } = useLang();
  const { t } = useClientTranslation('projects', lng);
  
  const rawProjects = t('projectList', { returnObjects: true });
  const projects = Array.isArray(rawProjects) ? rawProjects : [];

  return (
    <section id="projects" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project?.projectUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

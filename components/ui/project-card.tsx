import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  tags,
}) => {
  const content = (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  // Se houver projectUrl, renderiza <a>, senão apenas um <div>
  if (projectUrl) {
    return (
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="block bg-card rounded-lg overflow-hidden shadow-lg transition-all duration-300 relative">
      {content}
    </div>
  );
};

export default ProjectCard;
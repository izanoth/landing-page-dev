import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left animate-delay-200">
            <p className="text-lg leading-relaxed mb-6">
              Hello! I'm Ivan Cilento, a passionate software developer with a knack for building robust and scalable applications. My journey in tech has been driven by a constant curiosity and a desire to solve complex problems with elegant solutions.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in full-stack development, with a strong emphasis on modern JavaScript frameworks like React and Next.js, coupled with efficient backend solutions. I thrive in dynamic environments where I can continuously learn and contribute to impactful projects.
            </p>
          </div>
          <div className="flex justify-center animate-fade-in-right animate-delay-400">
            {/* Placeholder for profile image or illustration */}
            <div className="w-64 h-64 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 text-xl">
              Profile Image
            </div>
          </div>
        </div>
        <div className="mt-16 text-center animate-fade-in-up animate-delay-600">
          <h3 className="text-2xl font-semibold mb-4">My Tech Stack</h3>
          <p className="text-lg">
            React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Docker, AWS, Git, Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 animate-fade-in-up">
          Get in Touch
        </h2>
        <p className="text-lg mb-8 animate-fade-in-up animate-delay-200">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex flex-col items-center gap-6 mb-12 animate-fade-in-up animate-delay-400">
          <a
            href="mailto:ivan.cilento@example.com"
            className="flex items-center text-xl text-foreground hover:text-indigoMid transition-colors duration-300"
          >
            <Mail size={28} className="mr-3" /> ivan.cilento@example.com
          </a>
          <div className="flex gap-6">
            <a
              href="https://github.com/ivancilento"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-indigoMid transition-colors duration-300"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/ivancilento"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-indigoMid transition-colors duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://twitter.com/ivancilento"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-indigoMid transition-colors duration-300"
            >
              <Twitter size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

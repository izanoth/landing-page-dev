'use client';
import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useClientTranslation } from '@/lib/i18n/use-client-translation';

const Footer = ({ lng }: { lng: string }) => {
  const { t } = useClientTranslation('footer', lng);
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-card text-foreground border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p dangerouslySetInnerHTML={{ __html: t('copyright', { year }) }} />
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/ivancilento"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigoMid transition-colors duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ivancilento"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigoMid transition-colors duration-300"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';
import React from 'react';
import ServiceItem from '../ui/service-item';
import { Code, Smartphone, Rocket, Settings } from 'lucide-react';
import { useClientTranslation } from '@/lib/i18n/use-client-translation';

const Services = ({ lng }: { lng: string }) => {
  const { t } = useClientTranslation('services', lng);
  
  const items = t('servicesList', { returnObjects: true });
  const services = Array.isArray(items) ? items : [];

  return (
    <section id="services" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

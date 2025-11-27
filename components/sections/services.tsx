import React from 'react';
import ServiceItem from '../ui/service-item';
import { Code, Smartphone, Rocket, Settings } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Crafting modern, responsive, and high-performance web applications using cutting-edge technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Building intuitive and feature-rich mobile applications for iOS and Android platforms.",
  },
  {
    icon: Rocket,
    title: "Cloud Solutions",
    description: "Designing and implementing scalable and secure cloud-native architectures on AWS, Azure, or GCP.",
  },
  {
    icon: Settings,
    title: "API Development",
    description: "Developing robust and efficient RESTful APIs to power your applications and integrate diverse systems.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
          My Services
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

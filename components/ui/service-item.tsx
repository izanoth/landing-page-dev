import React from 'react';
import { IconNode } from 'lucide-react';

interface ServiceItemProps {
  icon: React.ElementType<{
    className?: string;
    size?: number;
  }>;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="mb-4 text-purpleStart">
        <Icon size={48} className="text-indigoMid" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default ServiceItem;

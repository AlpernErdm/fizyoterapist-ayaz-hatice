import React from 'react';
import ServiceCard from './ServiceCard';
import type { Service } from '@/types';

export interface ServiceGridProps {
  services: Service[];
  columns?: 2 | 3 | 4;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services, columns = 3 }) => {
  // Responsive grid classes based on columns prop
  const gridClasses = {
    2: 'grid grid-cols-1 md:grid-cols-2 gap-6',
    3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
  };

  return (
    <div className={gridClasses[columns]}>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceGrid;

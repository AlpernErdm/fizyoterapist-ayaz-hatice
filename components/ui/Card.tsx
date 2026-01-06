import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = false, 
  padding = 'md' 
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-200';
  
  const hoverStyles = hover ? 'hover:shadow-lg hover:scale-[1.02]' : '';
  
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };
  
  return (
    <div className={cn(baseStyles, hoverStyles, paddingStyles[padding], className)}>
      {children}
    </div>
  );
};

export default Card;

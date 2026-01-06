import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  size = 'lg', 
  className 
}) => {
  const baseStyles = 'mx-auto px-4 sm:px-6 lg:px-8';
  
  const sizeStyles = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
  };
  
  return (
    <div className={cn(baseStyles, sizeStyles[size], className)}>
      {children}
    </div>
  );
};

export default Container;

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  href?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', icon: Icon, href, children, className, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantStyles = {
      primary: 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500',
      secondary: 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500',
      outline: 'border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-50 focus:ring-emerald-500',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    };
    
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };
    
    const buttonClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );
    
    if (href) {
      return (
        <a href={href} className={buttonClasses}>
          {Icon && <Icon className="w-5 h-5" />}
          {children}
        </a>
      );
    }
    
    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

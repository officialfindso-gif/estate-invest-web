import React from 'react';
import Icon from './Icon';

interface BadgeProps {
  variant?: 'warning' | 'info' | 'success' | 'primary';
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  warning: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-500',
  info: 'bg-blue-500/10 border-blue-500/20 text-blue-500',
  success: 'bg-green-500/10 border-green-500/20 text-green-500',
  primary: 'bg-[var(--accent-color)]/10 border-[var(--accent-color)]/20 text-[var(--accent-color)]'
};

export default function Badge({ 
  variant = 'primary', 
  icon, 
  children,
  className = ''
}: BadgeProps) {
  return (
    <div 
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${variantStyles[variant]} ${className}`}
    >
      {icon && (
        <Icon 
          name={icon} 
          size={16} 
          color={variant === 'primary' ? 'var(--accent-color)' : undefined}
          ariaHidden={true} 
        />
      )}
      <span>{children}</span>
    </div>
  );
}

'use client';

import { cn } from '@/lib/utils';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'ghost-primary';
  size?: 'sm' | 'md' | 'lg';
}

export function buttonClass({
  variant = 'primary',
  size = 'md',
  className,
}: Pick<ButtonProps, 'variant' | 'size' | 'className'>) {
  const base =
    'inline-flex items-center justify-center gap-2 font-display font-bold rounded-2xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary text-text shadow-orange-btn hover:bg-primary/90 active:bg-primary/80',
    secondary: 'bg-background-secondary dark:bg-dark-elevated text-text-primary dark:text-text hover:bg-background-tertiary dark:hover:bg-dark-overlay',
    ghost: 'bg-transparent text-text-primary hover:bg-background-secondary active:bg-background-secondary/80',
    outline: 'border border-text-primary/20 text-text-primary hover:bg-background-secondary bg-transparent',
    'ghost-primary': 'border border-primary text-primary bg-primary/10 hover:bg-primary/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm h-9',
    md: 'px-6 py-3 text-base h-11',
    lg: 'px-8 text-lg h-[50px]',
  };

  return cn(base, variants[variant!], sizes[size!], className);
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => (
    <button ref={ref} className={buttonClass({ variant, size, className })} {...props}>
      {children}
    </button>
  )
);

Button.displayName = 'Button';

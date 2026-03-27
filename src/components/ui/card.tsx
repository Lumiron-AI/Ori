import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

export function Card({ children, className, variant = 'light' }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6',
        variant === 'light' ? 'bg-background-secondary' : 'bg-secondary',
        className
      )}
    >
      {children}
    </div>
  );
}

import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  className?: string;
}

export default function Tag({ children, variant = 'solid', className = '' }: TagProps) {
  const baseStyles = "px-3 py-1 rounded-full text-xs font-space-grotesk transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    solid: "bg-gradient-brand text-brand-950 font-medium shadow-[0_0_15px_rgba(108,160,148,0.2)]",
    outline: "bg-white/5 border border-brand/20 text-brand-light/80 hover:bg-brand/10 hover:text-brand-light",
    ghost: "text-white/40 hover:text-brand-light hover:bg-white/5"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

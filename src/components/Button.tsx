// src/components/Button.tsx
import React from 'react';

type Props = {
  variant?: 'primary' | 'ghost';
  size?: 'md' | 'sm';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  'aria-label'?: string;
};

export default function Button({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  children,
  className = '',
  ...rest
}: Props) {
  const base = 'inline-flex items-center justify-center font-body font-medium tracking-wide transition-all duration-200 cursor-pointer';
  const sizes = {
    md: 'px-7 py-3.5 text-[0.95rem]',
    sm: 'px-5 py-2.5 text-[0.85rem]',
  };
  const variants = {
    primary: 'rounded-full bg-deep-wine text-ivory shadow-[0_2px_8px_rgba(74,24,34,0.08)] hover:bg-burgundy hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(74,24,34,0.18)]',
    ghost:   'rounded-full border border-deep-wine text-deep-wine hover:bg-deep-wine hover:text-ivory',
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const El = Tag as any;
  return (
    <El className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </El>
  );
}

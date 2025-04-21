// src/components/ui/card.tsx
import { FC, ReactNode, HTMLAttributes } from 'react';
import React from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className = '', ...rest }) => (
  <div className={`card ${className}`} {...rest}>
    {children}
  </div>
);

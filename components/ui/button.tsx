'use client';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  const handleClick = () => {
    const phoneNumber = '5548996179935';
    const message = 'Olá, vim do Google e quero saber com funciona a consulta com a AIRE';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full text-md font-bold font-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

import { useState } from 'react';

interface NameComponentProps {
  name?: string;
}

export default function NameComponent({ name = "MIYOUNG GO" }: NameComponentProps) {
  return (
    <div 
      className="text-white font-bold text-3xl"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 9999,
        paddingLeft: '40px',
        textAlign: 'left',
        fontFamily: 'Arial, sans-serif',
        fontWeight: '900'
      }}
    >
      <div>{name}</div>
      <div style={{ fontSize: '1rem', fontWeight: '900', marginTop: '8px' }}>
        FULL-STACK DEVELOPER
      </div>
    </div>
  );
} 
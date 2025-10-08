// EyeIcon.jsx
import React from 'react';

export default function EyeIcon({ 
  size = 14, 
  stroke = "var(--secondary-color)",  // Màu cho đường viền (stroke)
  fill = "var(--tertiary-color)",
  className = '' 
  
}) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-eye ${className}`}
      viewBox="0 0 24 24"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
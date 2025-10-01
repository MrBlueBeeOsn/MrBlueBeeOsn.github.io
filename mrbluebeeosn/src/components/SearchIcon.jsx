export default function SearchIcon({ 
  size = 24, 
  stroke = "currentColor",  // Màu cho đường viền (stroke)
  fill = "none",            // Màu cho nền bên trong (fill)
  strokeWidth = 2,
  className = "" 
}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={`icon ${className}`}
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
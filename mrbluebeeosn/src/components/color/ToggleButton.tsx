// components/ToggleButton.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke, faTimes } from '@fortawesome/free-solid-svg-icons';

interface ToggleButtonProps {
  isVisible: boolean;
  onToggle: () => void;
  variant?: 'header' | 'floating'; // Thêm variant prop
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ 
  isVisible, 
  onToggle, 
  variant = 'floating' // Giá trị mặc định
}) => {
  // Style cho header variant
  const headerStyle: React.CSSProperties = {
    // padding: '8px 16px',
    backgroundColor: 'transparent',
    color: 'var(--secondary-color)',
    border: '0px solid var(--secondary-color)',
    // borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '1.8rem',
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center',
    // gap: '8px',
    transition: 'all 0.3s ease',
    minWidth: 'auto' // Không cần minWidth cho header
  };

  // Style cho floating variant (mặc định)
  const floatingStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    zIndex: 1002,
    padding: '15px 25px',
    backgroundColor: isVisible ? 'var(--secondary-color)' : 'var(--secondary-color)',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    minWidth: '160px',
    transition: 'all 0.3s ease'
  };

  const style = variant === 'header' ? headerStyle : floatingStyle;

  // Text hiển thị khác nhau tùy variant
  const buttonText = variant === 'header' 
    ? '' 
    : (isVisible ? 'Ẩn Bảng Màu' : 'Đổi Màu Pattern');

  return (
    <button
      onClick={onToggle}
      style={style}
      title={isVisible ? 'Ẩn Bảng Màu' : 'Hiện Bảng Màu'}
    >
      <FontAwesomeIcon 
        icon={isVisible ? faCircleHalfStroke : faCircleHalfStroke} 
        style={{ fontSize: variant === 'header' ? '18px' : '18px' }}
      />
      {buttonText}
    </button>
  );
};

export default ToggleButton;
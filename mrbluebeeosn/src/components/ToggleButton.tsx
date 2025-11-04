// components/ToggleButton.tsx
import React from 'react';

interface ToggleButtonProps {
  isVisible: boolean;
  onToggle: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isVisible, onToggle }) => {
  console.log('🔘 ToggleButton rendering, isVisible:', isVisible); // Debug

  return (
    <button
      onClick={onToggle}
      style={{
        position: 'relative', // Đổi từ fixed thành relative vì đã có div cha fixed
        padding: '5px 5px',
        backgroundColor: isVisible ? 'var(--primary-color)' : 'var(--secondary-color)',
        color: 'white',
        border: '3px solid var(--border-color)', // Border nổi bật
        borderRadius: '25px',
        cursor: 'pointer',
        fontSize: '10px',
        fontWeight: 'bold',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: 1003,
        minWidth: '20px',
        justifyContent: 'center'
      }}
      // title={isVisible ? 'Ẩn Pattern' : 'Hiện Pattern'}
    >
      <span style={{ fontSize: '18px' }}>
        {/* {isVisible ? '👁️‍🗨️' : '👁️'} */}
      </span>
      {/* {isVisible ? 'Ẩn Pattern' : 'Hiện Pattern'} */}
    </button>
  );
};

export default ToggleButton;
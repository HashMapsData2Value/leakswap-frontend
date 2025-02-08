import React from 'react';
import './Buttons.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="algo-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
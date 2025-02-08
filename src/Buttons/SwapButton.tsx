import React from 'react';
import './SwapButton.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="swap-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
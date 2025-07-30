import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
  >
    {children}
  </button>
);

export default Button;

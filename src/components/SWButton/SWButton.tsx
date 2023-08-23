// SWButton.tsx
import React from 'react';
import classNames from 'classnames';
import './SWButton.css';

export interface SWButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  kind?: 'primary' | 'secondary' | 'tertiary';
}

const SWButton: React.FC<SWButtonProps> = ({ children, onClick, disabled, kind='tertiary', className='' }) => {
  const buttonClass = classNames('sw-button', {
    'sw-btn-primary': kind === 'primary',
    'sw-btn-secondary': kind === 'secondary',
    'sw-btn-tertiary': kind === 'tertiary',
    'sw-btn-disabled': disabled,
  });

  return (
    <button className={`${buttonClass} ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default SWButton;

// SWTextInput.tsx
import React from 'react';
import './SWTextInput.css';

export interface SWTextInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SWTextInput: React.FC<SWTextInputProps> = ({ label, value, onChange, placeholder }) => (
  <div className="sw-text-input">
    <label className="sw-text-input-label">{label}</label>
    <input
      type="text"
      className="sw-text-input-field"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default SWTextInput;

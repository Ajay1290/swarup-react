// SWCheckbox.tsx (Improved)
import React from 'react';
import './SWCheckbox.css';

export interface SWCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const SWCheckbox: React.FC<SWCheckboxProps> = ({ label, checked, onChange }) => {
  const handleCheckboxChange = () => {
    onChange(!checked);
  };

  return (
    <label className="sw-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="sw-checkbox-input"
      />
      <span className="sw-checkbox-custom"></span>
      <span className="sw-checkbox-label">{label}</span>
    </label>
  );
};

export default SWCheckbox;

// SWSelect.tsx
import React from 'react';
import './SWSelect.css';

export interface SWSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const SWSelect: React.FC<SWSelectProps> = ({ label, options, value, onChange }) => (
  <div className="sw-select">
    <label className="sw-select-label">{label}</label>
    <select value={value} onChange={(e) => onChange(e.target.value)} className="sw-select-field">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SWSelect;

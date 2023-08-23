// SWSlider.tsx
import React, { useState } from 'react';
import './SWSlider.css';

export interface SWSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const SWSlider: React.FC<SWSliderProps> = ({ value, onChange }) => {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    onChange(newValue);
  };

  return (
    <div className="sw-slider">
      <input
        type="range"
        className="sw-slider-input"
        value={value}
        onChange={handleSliderChange}
      />
      <div className="sw-slider-value">{value}</div>
    </div>
  );
};

export default SWSlider;

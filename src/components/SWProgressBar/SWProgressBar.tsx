// SWProgressBar.tsx
import React from 'react';
import './SWProgressBar.css';

export interface SWProgressBarProps {
  percentage: number;
}

const SWProgressBar: React.FC<SWProgressBarProps> = ({ percentage }) => (
  <div className="sw-progress-bar">
    <div className="sw-progress-bar-fill" style={{ width: `${percentage}%` }}></div>
  </div>
);

export default SWProgressBar;

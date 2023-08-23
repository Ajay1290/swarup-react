// SWTooltip.tsx
import React, { useState } from 'react';
import './SWTooltip.css';

export interface SWTooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

const SWTooltip: React.FC<SWTooltipProps> = ({ content, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="sw-tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && <div className="sw-tooltip-content">{content}</div>}
    </div>
  );
};

export default SWTooltip;

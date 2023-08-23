// SWAccordion.tsx
import React, { useState } from 'react';
import './SWAccordion.css';

export interface SWAccordionProps {
  title: string;
  content: React.ReactNode;
}

const SWAccordion: React.FC<SWAccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sw-accordion">
      <div className="sw-accordion-header" onClick={handleToggle}>
        <div className="sw-accordion-title">{title}</div>
        <div className={`sw-accordion-icon ${isOpen ? 'open' : ''}`}>+</div>
      </div>
      {isOpen && <div className="sw-accordion-content">{content}</div>}
    </div>
  );
};

export default SWAccordion;

// SWTabs.tsx
import React, { useState } from 'react';
import './SWTabs.css';

export interface SWTabsProps {
  tabs: { label: string; content: React.ReactNode }[];
}

const SWTabs: React.FC<SWTabsProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="sw-tabs">
      <div className="sw-tabs-header">
        {tabs.map((tab, index) => (
          <span
            key={index}
            className={`sw-tab-btn ${index === activeTabIndex ? 'active' : ''}`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.label}
          </span>
        ))}
      </div>
      <div className="sw-tabs-content">{tabs[activeTabIndex].content}</div>
    </div>
  );
};

export default SWTabs;

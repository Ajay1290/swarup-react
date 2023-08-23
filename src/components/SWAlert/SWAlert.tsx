// SWAlert.tsx
import React from 'react';
import './SWAlert.css';

export interface SWAlertProps {
  type: 'success' | 'warning' | 'error';
  message: string;
}

const SWAlert: React.FC<SWAlertProps> = ({ type, message }) => (
  <div className={`sw-alert sw-alert-${type}`}>
    <span className="sw-alert-icon">!</span>
    <span className="sw-alert-message">{message}</span>
  </div>
);

export default SWAlert;

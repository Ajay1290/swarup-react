// SWModal.tsx
import React from 'react';
import './SWModal.css';

export interface SWModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const SWModal: React.FC<SWModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="sw-modal-overlay">
      <div className="sw-modal">
        <div className="sw-modal-header">
          <h3 className="sw-modal-title">{title}</h3>
          <button className="sw-modal-close-btn" onClick={onClose}>
            &#10006;
          </button>
        </div>
        <div className="sw-modal-content">{children}</div>
      </div>
    </div>
  );
};

export default SWModal;

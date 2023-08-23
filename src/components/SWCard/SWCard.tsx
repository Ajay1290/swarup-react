// SWCard.tsx
import React from 'react';
import './SWCard.css';

export interface SWCardProps {
  title: string;
  content: string;
  imageSrc?: string;
}

const SWCard: React.FC<SWCardProps> = ({ title, content, imageSrc }) => (
  <div className="sw-card">
    {imageSrc && <img src={imageSrc} alt={title} className="sw-card-image" />}
    <h2 className="sw-card-title">{title}</h2>
    <p className="sw-card-content">{content}</p>
  </div>
);

export default SWCard;

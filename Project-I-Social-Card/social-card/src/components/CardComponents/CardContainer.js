import React from 'react';
import './Card.css';

import CardBanner from './CardBanner.js';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    
    <a href='https://www.reactjs.org'>
    <div className='cards-container'>
    <CardBanner />
    <CardContent />
    </div>
    </a>
    
  );
};

export default CardContainer;


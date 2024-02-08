import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './NavigationBurger.css';

function NavigationBurger({ onNavigationMobile }) {
  const location = useLocation();

  return (
    <div className='burger'>
      <button 
        className={`${
          location.pathname === '/' ? '' : 'burger__button_black'
        } burger__button button`}
        type='button'
        onClick={onNavigationMobile}
      ></button>
    </div>
  );
}

export default NavigationBurger;

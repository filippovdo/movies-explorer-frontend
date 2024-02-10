import React from "react";
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import NavigationMobile from '../Navigation/NavigationMobile/NavigationMobile';
import NavigationBurger from '../Navigation/NavigationBurger/NavigationBurger';
import { Link,  useLocation } from 'react-router-dom';
import './Header.css';



function Header() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(true);
  const [isNavigationMobileOpen, setIsNavigationMobileOpen] = useState(false);

  function handleBurgerClick() {
    setIsNavigationMobileOpen(true);
  }

  function handleNavigationMobileClose() {
    setIsNavigationMobileOpen(false);
  }

  return (
    <header
      className={`${
        location.pathname === '/' ? 'header_dark' : ''
      } header container70`}
    >
      <Link to='/'>
        <div className='logo' />
      </Link>
      <Navigation loggedIn={loggedIn} />
      {loggedIn && <NavigationBurger onNavigationMobile={handleBurgerClick} />}
      <NavigationMobile isOpen={isNavigationMobileOpen} onClose={handleNavigationMobileClose} />
    </header>
  );
}

// логику додел

export default Header;
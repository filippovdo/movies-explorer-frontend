import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import NavigationMobile from "../Navigation/NavigationMobile/NavigationMobile";
import NavigationBurger from "../Navigation/NavigationBurger/NavigationBurger";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header({ loggedIn }) {
  const location = useLocation();
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
        location.pathname === "/" ? "header_black" : ""
      } header html__centered`}
    >
      <Link to="/">
        <div className="logo" />
      </Link>
      <Navigation loggedIn={loggedIn} />
      {loggedIn && <NavigationBurger onNavigationMobile={handleBurgerClick} />}
      <NavigationMobile isOpen={isNavigationMobileOpen} onClose={handleNavigationMobileClose} />
    </header>
  );
}

// логику додел

export default Header;

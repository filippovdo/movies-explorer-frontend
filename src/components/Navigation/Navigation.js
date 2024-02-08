import React from "react";
import { Link, useLocation } from "react-router-dom";
import AccountButton from "../AccountButton/AccountButton";
import "./Navigation.css";

function Navigation({ loggedIn }) {
  const location = useLocation();

  return (
    <>
      {loggedIn ? (
        <>
          <nav className="nav">
            <ul className="nav__items">
              <li>
                <Link
                  to="/movies"
                  className={`${
                    location.pathname === "/movies"
                      ? "nav__active"
                      : ""
                  } nav__item link`}
                >
                  Фильмы
                </Link>
              </li>
              <li>
                <Link
                  to="/saved-movies"
                  className={`${
                    location.pathname === "/saved-movies"
                      ? "nav__active"
                      : ""
                  } nav__item link`}
                >
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
          </nav>
          <AccountButton />
        </>
      ) : (
        <nav className="nav">
          <Link to="/signup" className="nav__signup link">
            Регистрация
          </Link>
          <Link to="/signin" className="nav__signin link">
            <span>Войти</span>
          </Link>
        </nav>
      )}
    </>
  );
}

export default Navigation;

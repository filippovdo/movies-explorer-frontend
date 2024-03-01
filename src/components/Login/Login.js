import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
  return (
    <>
      <main className="signup">
        <div className="signup__container">
          <div className="signup__items">
            <Link to="/">
              <div className="logo" />
            </Link>
            <h1 className="signup__title">Рады видеть!</h1>
            <form className="signup__form" name="signin">
              <fieldset className="signup__fields">
                <label className="signup__field-container">
                  <span className="signup__field-title">E-mail</span>
                  <input
                    name="email"
                    type="email"
                    className="signup__field"
                    id="email-input"
                    placeholder="Введите email"
                    minLength="2"
                    maxLength="40"
                    required
                  />
                  <div className="input-error">Обязательное поле</div>
                </label>
                <label className="signup__field-container">
                  <span className="signup__field-title">Пароль</span>
                  <input
                    name="password"
                    type="password"
                    className="signup__field"
                    id="password-input"
                    placeholder="Введите пароль"
                    minLength="8"
                    maxLength="16"
                    required
                  />
                  <div className="input-error">Обязательное поле</div>
                </label>
              </fieldset>
            </form>
          </div>
          <div className="signup__submit">
            <button type="submit" className="button signup__submit-button">
              Войти
            </button>
            <p className="signup__text">
              Ещё не зарегистрированы?{" "}
              <span>
                <Link to="/signup" className="signup__signup-link link">
                  Регистрация
                </Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;

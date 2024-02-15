import React from "react";
import { Link } from "react-router-dom";

import "./Register.css";

function Register() {

  

  return (
    <main className="register">
      <div className="register__container">
        <div className="register__items">
          <Link to="/">
            <div className="logo" />
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="register__form" name="signup">
            <fieldset className="register__inputs">
              <label>
                <span className="register__input-title">Имя</span>
                <input
                  name="name"
                  type="text"
                  className={`register__input`}
                  id="name-input"
                  placeholder="Введите имя"
                  minLength="2"
                  maxLength="40"
                  required
                />
                <div className="input-error">Обязательное поле</div>
              </label>
              <label>
                <span className="register__input-title">E-mail</span>
                <input
                  name="email"
                  type="email"
                  className={`register__input`}
                  id="email-input"
                  placeholder="Введите email"
                  minLength="2"
                  maxLength="40"
                  required
                />
                <div className="input-error">Обязательное поле</div>
              </label>
              <label>
                <span className="register__input-title">Пароль</span>
                <input
                  name="password"
                  type="password"
                  className={`register__input`}
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
        <div className="register__submit">
          <button type="submit" className={`button register__submit-button`}>
            Зарегистрироваться
          </button>
          <p className="register__text">
            Уже зарегистрированы?{" "}
            <span>
              <Link to="/signin" className="register__login-link link">
                Войти
              </Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Register;

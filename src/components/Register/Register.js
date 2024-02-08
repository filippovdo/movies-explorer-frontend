import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <section className="register">
      <form name="register__form" className="register__form">
        <div className="register__inputs">
          <Link className="register__logo" to="/">
            <img className="register__logo" src={logo} alt="Movies Explorer" />
          </Link>
          <h2 className="register__title">Добро пожаловать!</h2>
          <label for="name-field" className="register__lable">
            Имя
          </label>
          <input
            type="text"
            id="name-field"
            className="register__field"
            minLength="2"
            maxLength="40"
            name="name"
          />
          <span className="login__input_error register__span"></span>
          <label for="email-inputs" className="register__lable">
            E-mail
          </label>
          <input
            type="email"
            id="email-inputs"
            className="register__field"
            name="email"
          />
          <span className="email-inputs-error register__span"></span>
          <label for="password-input" className="register__lable">
            Пароль
          </label>
          <input
            type="text"
            id="password-input"
            className="register__field"
            name="password"
          />
          <span className="password-input-error register__span"></span>
        </div>
        <button
          type="submit"
          className="register__submit"
          name="submit"
          defaultValue="Зарегистрироваться"
        >
          Зарегистрироваться
        </button>
      </form>
      <div className="register__bottom">
        <h2 className="register__text">Уже зарегистрированы?</h2>
        <Link to="/signin" className="register__text register__link">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;

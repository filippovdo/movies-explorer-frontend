import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useValidation from "../../utils/validation";
import { REGEX_EMAIL } from "../../utils/config";

import "./Register.css";

function Register({ handleRegistration, isError, setIsError }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/signup") {
      setIsError("");
    }
  }, [location, setIsError]);

  useEffect(() => {
    if (localStorage.token) {
      navigate("/movies", { replace: true });
    }
  }, [navigate]);

  const { handleChange, values, errors, isInputValid, isFormValid } =
    useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(values);
  };

  return (
    <main className="signupReg">
      <div className="signupReg__container">
        <div className="signupReg__items">
          <Link to="/">
            <div className="logo" />
          </Link>
          <h1 className="signupReg__title">Добро пожаловать!</h1>
          <form
            onSubmit={handleSubmit}
            id="signupReg"
            className="signupReg__form"
            name="signup"
          >
            <fieldset className="signupReg__fields">
              <label>
                <span className="signupReg__field-title">Имя</span>
                <input
                  onChange={handleChange}
                  value={values.name || ""}
                  name="name"
                  type="text"
                  className={`signupReg__field ${
                    !isInputValid.name ? "signupReg__field_error" : ""
                  }`}
                  id="name-input"
                  placeholder="Введите имя"
                  minLength={2}
                  maxLength={30}
                  required
                />
                <span className="input-error">{errors.name}</span>
              </label>
              <label>
                <span className="signupReg__field-title">E-mail</span>
                <input
                  onChange={handleChange}
                  value={values.email || ""}
                  name="email"
                  type="email"
                  className={`signupReg__field ${
                    !isInputValid.email ? "signupReg__field_error" : ""
                  }`}
                  id="email-input"
                  placeholder="Введите email"
                  pattern={REGEX_EMAIL}
                  required
                />
                <span className="input-error">{errors.email}</span>
              </label>
              <label>
                <span className="signupReg__field-title">Пароль</span>
                <input
                  onChange={handleChange}
                  value={values.password || ""}
                  name="password"
                  type="password"
                  className={`signupReg__field ${
                    !isInputValid.password ? "signupReg__field_error" : ""
                  }`}
                  id="password-input"
                  placeholder="Введите пароль"
                  minLength={8}
                  maxLength={16}
                  required
                />
                <span className="input-error">{errors.password}</span>
              </label>
            </fieldset>
          </form>
        </div>
        <div className="signupReg__submit">
          <button
            disabled={!isFormValid}
            type="submit"
            form="register"
            className={`button signupReg__submit-button ${
              !isFormValid ? "signupReg__submit-button_disabled" : ""
            }`}
          >
            <span className="input-error input-error_top">{isError}</span>
            Зарегистрироваться
          </button>
          <p className="signupReg__text">
            Уже зарегистрированы?{" "}
            <span>
              <Link to="/signin" className="signupReg__login-link link">
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

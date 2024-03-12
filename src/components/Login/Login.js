import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useValidation from "../../utils/validation";
import { REGEX_EMAIL } from "../../utils/config";

import "./Login.css";

function Login({ handleLogin, isError, setIsError }) {
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (location.pathname === "/signin") {
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
    handleLogin(values.email, values.password);
  };

  return (
    <>
      <main className="signup">
        <div className="signup__container">
          <div className="signup__items">
            <Link to="/">
              <div className="logo" />
            </Link>
            <h1 className="signup__title">Рады видеть!</h1>
            <form
              className="signup__form"
              name="signin"
              onSubmit={handleSubmit}
              id="login"
            >
              <fieldset className="signup__fields">
                <label className="signup__field-container">
                  <span className="signup__field-title">E-mail</span>
                  <input


                    onChange={handleChange}
                    value={values.email || ''}
                    name='email'
                    type='email'
                    className={`signup__field ${
                      !isInputValid.email ? 'login__input_error' : ''
                    } `}
                    id='email-input'
                    placeholder='Введите email'
                    minLength={2}
                    maxLength={30}
                    pattern={REGEX_EMAIL}
                    required


                  />
                  <span className='input-error'>{errors.email}</span>
                </label>
                <label className="signup__field-container">
                  <span className="signup__field-title">Пароль</span>
                  <input
                    onChange={handleChange}
                    value={values.password || ''}
                    name='password'
                    type='password'
                    className={`signup__field ${
                      !isInputValid.password ? 'signup__field_error' : ''
                    } `}
                    id='password-input'
                    placeholder='Введите пароль'
                    minLength={8}
                    maxLength={16}
                    required
                  />
                   <span className='input-error'>{errors.password}</span>
                </label>
              </fieldset>
            </form>
          </div>

          <div className='signup__submit'>
            <button
              form='login'
              disabled={!isFormValid}
              type='submit'
              className={`button signup__submit-button ${
                !isFormValid ? 'signup__submit-button_disabled' : ''
              }`}
            >
              <span className='input-error input-error_top'>{isError}</span>
              Войти
            </button>
            <p className='signup__text'>
              Ещё не зарегистрированы?{' '}
              <span>
                <Link to='/signup' className='login__signup-link link'>
                  Регистрация
                </Link>
              </span>{' '}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;

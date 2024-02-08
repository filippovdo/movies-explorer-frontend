import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  return (
    <section className="login">
      <form name="login__form" className="login__form">
        <div className="login__input">
          <Link className="login__logo" to="/"><img className="login__logo" src={logo} /></Link>
          <h2 className="login__title">Рады видеть!</h2>
          <label for="email-inputs" className="login__input_title">E-mail</label>
          <input 
            type="email" 
            id="email-inputs" 
            className="login__inputs"  
            maxLength="50" 
            required 
            name="email"/>
          <span className="login__input_error login__span"></span>
          <label for="password-input" className="login__input_title">Пароль</label>
          <input
            type="text"
            id="password-input"
            className="login__inputs"
            maxLength="40"
            required
            name="password"
          />
          
        </div>
        <button type="submit" className="login__submit" name="submit" defaultValue="Войти">Войти</button>
      </form>
      <div className="login__bottom">
        <h2 className="login__text">Ещё не зарегистрированы?</h2>
        <Link to="/signup" className="login__text login__link">Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../utils/validation';

import './Register.css';

function Register() {
  const username = useInput('', {});

  const email = useInput('', {});

  const password = useInput('', {});

  // сдел вал

  return (
    <main className='signupReg'>
      <div className='signupReg__container'>
        <div className='signupReg__items'>
          <Link to='/'>
            <div className='logo' />
          </Link>
          <h1 className='signupReg__title'>Добро пожаловать!</h1>
          <form className='signupReg__form' name='signup'>
            <fieldset className='signupReg__fields'>
              <label>
                <span className='signupReg__field-title'>Имя</span>
                <input
                  onChange={(e) => username.onChange(e)}
                  onBlur={(e) => username.onBlur(e)}
                  value={username.value}
                  name='name'
                  type='text'
                  className='signupReg__field'
                  id='name-input'
                  placeholder='Введите имя'
                  required
                />
              </label>
              <label>
                <span className='signupReg__field-title'>E-mail</span>
                <input
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                  value={email.value}
                  name='email'
                  type='email'
                  className='signupReg__field'
                  id='email-input'
                  placeholder='Введите email'
                  required
                />
              </label>
              <label>
                <span className='signupReg__field-title'>Пароль</span>
                <input
                  onChange={(e) => password.onChange(e)}
                  onBlur={(e) => password.onBlur(e)}
                  value={password.value}
                  name='password'
                  type='password'
                  className='signupReg__field'
                  id='password-input'
                  placeholder='Введите пароль'
                  required
                />
              </label>
            </fieldset>
          </form>
        </div>
        <div className='signupReg__submit'>
          <button
            type='submit'
            className='button signupReg__submit-button'
          >
            Зарегистрироваться
          </button>
          <p className='signupReg__text'>
            Уже зарегистрированы?{' '}
            <span>
              <Link to='/signin' className='signupReg__login-link link'>
                Войти
              </Link>
            </span>{' '}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Register;


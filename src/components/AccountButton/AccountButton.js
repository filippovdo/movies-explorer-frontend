import React from 'react';
import { Link } from 'react-router-dom';
import './AccountButton.css';

function AccountButton() {
  return (
    <Link to='/profile' className='account-button'>
      <div className='account-button__container'>
        <p className='account-button__text'>Аккаунт</p>
        <div className='account-button__icon'></div>
      </div>
    </Link>
  );
}

export default AccountButton;
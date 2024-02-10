import React from "react";
import "./SearchForm.css";


function SearchForm() {
  return (
    <form className='searchbar'>
      <div className='searchbar__form'>
        <label>
          <input
            className='searchbar__input'
            type='text'
            name='searchbar'
            placeholder='Фильм'
          />
        </label>
        <button type='submit' className='searchbar__button button'>Найти</button>
      </div>
      <div className='switch'>
      <div className='checkbox__filter'>
        <label>
          <input type='switch' className='check__toggler' />
          <span className='check__toggler-slider'></span>
        </label>
      </div>
      <p className='checkbox__text'>Короткометражки</p>
    </div>
    </form>
  );
}

export default SearchForm;

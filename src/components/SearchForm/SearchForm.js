import React from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function searchForm({
  handleSubmit,
  handleInputChange,
  inputValue,
  placeholder,
  onCheckbox,
  isChecked,
}) {
  return (
    <form className='searchbar' onSubmit={handleSubmit} noValidate>
      <div className='searchbar__form'>
        <label>
          <input
            className='searchbar__field'
            onChange={handleInputChange}
            value={inputValue || ''}
            type='text'
            name='search'
            placeholder={placeholder}
            required
          />
        </label>
        <button type='submit' className='searchbar__button button'>Найти</button>
      </div>
      <FilterCheckbox onCheckbox={onCheckbox} isChecked={isChecked} />
    </form>
  );
}

export default searchForm;

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function searchForm() {
  return (
    <form className='searchbar'>
      <div className='searchbar__form'>
        <label>
          <input
            className='searchbar__field'
            type='text'
            name='searchbar'
            placeholder='Название фильма'
            required
          />
        </label>
        <button type='submit' className='searchbar__button button'>Найти</button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default searchForm;

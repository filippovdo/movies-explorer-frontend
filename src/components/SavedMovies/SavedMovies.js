import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { shortMovieDuration } from '../../utils/config';

function SavedMovies({ loggedIn, savedMovies, onDelete }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [placeholder, setPlaceholder] = useState('Фильм');
  const [isQuery, setIsQuery] = useState(false);
  const [isSearchResult, setIsSearchResult] = useState(true);

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  const onFilter = (inputValue, isChecked, savedMovies) => {
    let searchResult = savedMovies.filter((item) => {
      const searchText =
        item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(inputValue.toLowerCase());
      return isChecked
        ? searchText && item.duration <= shortMovieDuration
        : searchText;
    });

    setFilteredMovies(searchResult);
    searchResult.length > 0
      ? setIsSearchResult(true)
      : setIsSearchResult(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isQuery) {
      setPlaceholder('Нужно ввести ключевое слово');
    } else {
      setIsChecked(isChecked);
      onFilter(inputValue, isChecked, savedMovies);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setPlaceholder('');
    setIsQuery(!!e.target.value);
  };

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    onFilter(inputValue, !isChecked, savedMovies);
  };

  const handleDelete = (movieId) => {
    onDelete(movieId);
    // После удаления карточки вызываем onFilter для обновления списка фильмов
    onFilter(inputValue, isChecked, savedMovies.filter(movie => movie._id !== movieId));
  };

  return (
    <>
      <div className='content'>
        <Header loggedIn={loggedIn} />
        <main className='saved_movies html__centered html__centered_s'>
          <SearchForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            onCheckbox={handleCheckboxClick}
            inputValue={inputValue}
            isChecked={isChecked}
            placeholder={placeholder}
          />
          <MoviesCardList
            savedMovies={filteredMovies}
            onDelete={handleDelete}
            isSearchResult={isSearchResult}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies;


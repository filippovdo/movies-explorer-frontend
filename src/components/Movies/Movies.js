import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { movies } from '../../utils/movies';
import './Movies.css';

function Movies() {
  const location = useLocation();

  return (
    <>
      <div className='content'>
        <Header />
        <main
          className={`movies html__centered ${
            location.pathname === '/' ? '' : 'html__centered_s'
          }`}
        >
          <SearchForm />
          <MoviesCardList movies={movies} />
          <div className='movies__also'>
            <button type='button' className='movies__also-btn button'>
              Ещё
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Movies;

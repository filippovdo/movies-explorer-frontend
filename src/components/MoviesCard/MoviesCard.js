import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import cardButton from '../../images/card-button.svg';
import cardButtonLike from '../../images/card-btn-like.svg';
import cardButtonDelete from '../../images/button-delete.svg';

function MoviesCard({ movie }) {
  const location = useLocation();

  return (
    <li className='moviesCard'>
      <img src={movie.link} alt={movie.name} className='moviesCard__img' />
      <div className='moviesCard__info'>
        <div className='moviesCard__description'>
          <h2 className='moviesCard__name'>{movie.name}</h2>
          {location.pathname === '/movies' && (
            <button type='button' className='moviesCard__button-container button'>
              <img
                src={cardButton}
                alt='кнопка лайка карточки'
                className='moviesCard__button'
              />
            </button>
          )}
          {location.pathname === '/saved-movies' && (
            <button
              type='button'
              className='moviesCard__button-container moviesCard__button-container_hidden button'
            >
              <img
                src={cardButtonDelete}
                alt='кнопка удаления карточки'
                className='moviesCard__button'
              />
            </button>
          )}
        </div>
        <p className='moviesCard__duration'>{movie.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;

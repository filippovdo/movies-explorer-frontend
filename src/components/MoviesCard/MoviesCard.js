import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { MOVIES_API } from '../../utils/config';
import getTimeFromMins from '../../utils/durationConverter';

function MoviesCard({ movie, onSave, onDelete, savedMovies }) {
  const location = useLocation();
  const isSaved = savedMovies.some((item) => item.movieId === movie.id);
  const movieImgUrl =
    typeof movie.image === 'string'
      ? movie.image
      : `${MOVIES_API}${movie.image.url}`;

  return (

    <li className='moviesCard'>
    <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
      <img src={movieImgUrl} alt={movie.name} className='moviesCard__img' />
    </a>

    <div className='moviesCard__info'>
      <div className='moviesCard__description'>
        <h2 className='moviesCard__name'>{movie.nameRU}</h2>
        {location.pathname === '/movies' && (
          <button
            onClick={() => onSave(movie)}
            type='button'
            className={`card__button button ${
              isSaved ? 'card__button_active' : 'card__button_like'
            } `}
          ></button>
        )}
        {location.pathname === '/saved-movies' && (
          <button
            onClick={() => onDelete(movie._id)}
            type='button'
            className='card__button card__button_delete button'
          ></button>
        )}
      </div>
      <p className='moviesCard__duration'>{getTimeFromMins(movie.duration)}</p>
    </div>
  </li>

  );
}

export default MoviesCard;

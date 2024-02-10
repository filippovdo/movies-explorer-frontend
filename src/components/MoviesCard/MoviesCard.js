import React from "react";
import "./MoviesCard.css";
import mov_img from "../../images/mov_img.png";
import { useLocation } from "react-router-dom";
import cardButton from '../../images/card-button.svg';

function MoviesCard() {
  let location = useLocation();
  return (
    <section className="cards ">
      <div className="cards__container">

      </div>
      <img className="cards__img" src={mov_img} />
      <div className="cards__info">
        <h2 className="cards__name">33 слова о дизайне</h2>
        <button type='button' className='card__button-container button'>
              <img
                src={cardButton}
                alt='кнопка лайка карточки'
                className='card__button'
              />
            </button>
      </div>
      <h2 className="cards__duration">1ч 47м</h2>
    </section>
  );
}

export default MoviesCard;

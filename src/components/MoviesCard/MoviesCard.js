import React from "react";
import "./MoviesCard.css";
import mov_img from "../../images/mov_img.png";
import { useLocation } from "react-router-dom";

function MoviesCard() {
  let location = useLocation();
  return (
    <section className="cards ">
      <div className="cards__container">
        <button
          type="button"
          aria-label="Сохранить"
          className={`cards__button ${
            location.pathname === "/movies" ? "cards__save" : "cards__close"
          }`}
        />
      </div>
      <img className="cards__img" src={mov_img} />
      <div className="cards__info">
        <h2 className="cards__name">33 слова о дизайне</h2>
       
      </div>
      <h2 className="cards__duration">1ч 47м</h2>
    </section>
  );
}

export default MoviesCard;

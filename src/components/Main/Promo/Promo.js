import React from "react";
import "./Promo.css";
import { Link } from "react-router-dom";

function Promo() {
  return (
    <section className="promo container70">
      <div className="promo__text">
        <h1 className="promo__header">
          Учебный проект студента факультета <br /> Веб-разработки.
        </h1>
        <p className="promo__description">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <Link to="#project" className="button promo__button">
          Узнать больше
        </Link>
      </div>
      <div className="promo__image"></div>
    </section>
  );
}

export default Promo;

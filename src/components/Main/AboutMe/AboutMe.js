import React from "react";
import "./AboutMe.css";
import filippovdo from "../../../images/filippovdo.jpg";

function AboutMe() {
  return (
    <section className="about" id="about">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__main">
        <div className="aboutMe__info">
          <h2 className="aboutMe__name">Дмитрий</h2>
          <h3 className="aboutMe__profession">веб-разработчик, 30 лет</h3>
          <h3 className="aboutMe__text">
            Родился и живу в Москве. Дизайнер, фотограф, режиссер онлайн курсов
          </h3>
          <a
            href="https://github.com/filippovdo"
            target="_blank"
            className="aboutMe__link"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="aboutMe__img" src={filippovdo} alt="filippovdo"></img>
      </div>
    </section>
  );
}

export default AboutMe;

import React from "react";
import './Techs.css';

function Techs() {
  return (
    <section className='techs container70'>
      <h3 className='title aboutMe__title'>Технологии</h3>
      <h3 className='tech__heading'>7 технологий</h3>
      <p className='tech__info'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="tech__list">
        <li className="tech__item">HTML</li>
        <li className="tech__item">CSS</li>
        <li className="tech__item">JS</li>
        <li className="tech__item">React</li>
        <li className="tech__item">Git</li>
        <li className="tech__item">Express.js</li>
        <li className="tech__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
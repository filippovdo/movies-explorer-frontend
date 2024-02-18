import React from 'react';
import { Link, } from 'react-scroll';

import './Promo.css';

function Promo() {
  return (
    <section className='promo html__centered'>
      <div className='promo__info'>
        <h1 className='promo__header'>
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className='promo__description'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <Link
          to='AboutProject'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={30}
          duration={500}
          className='button promo__button'
        >
          Узнать больше
        </Link>
      </div>
      <div className='promo__image'></div>
    </section>
  );
}

export default Promo;

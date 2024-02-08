import React from "react";
import { useNavigate } from 'react-router';
import './PageNotFound.css';


function PageNotFound() {
  const navigate = useNavigate();
  return (
    <section className="not-found">
      <div className="not-found__message">
        <h2 className="not-found__title">404</h2>
        <h2 className="not-found__text">Страница не найдена</h2> 
      </div>
      <button type='button' className='not-found__link button' onClick={() => navigate(-1)}>
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;

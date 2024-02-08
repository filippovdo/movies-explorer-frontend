import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <section class="also">
        <button type="button" class="also__button">
          Ещё
        </button>
      </section>
    </>
  );
}

export default Movies;

import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
  return (
    <>
    <main className="container70">
      <SearchForm />
      <MoviesCardList />
      <section class="also">
        <button type="button" class="also__button">
          Ещё
        </button>
      </section>
      </main>
    </>
  );
}

export default Movies;

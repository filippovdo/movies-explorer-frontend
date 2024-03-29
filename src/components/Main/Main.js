import React from "react";
import Promo from "../Promo/Promo";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";

function Main() {
  return (
    <>
      <div className="content">
        <Header />
        <main className="main">
          <Promo />
          <AboutProject id="about-project" />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Main;

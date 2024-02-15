import React from "react";
import "./App.css";
import { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom'; 
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Header from "../Header/Header";
import Main from "../Main/Main";

export const UserContext = React.createContext();

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("");
  const location = useLocation();

  function closeBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  function handleBurgerClick() {
    if (isBurgerMenuOpen) {
      setIsBurgerMenuOpen(false);
    } else setIsBurgerMenuOpen(true);
  }

  const isSignupPage = location.pathname === '/signup';
  const isSigninPage = location.pathname === '/signin';
  const isNotFoundPage = location.pathname === '*';

  return (
    <UserContext.Provider value={currentUser}>
      <div className="app">
        {(!isSignupPage && !isSigninPage && !isNotFoundPage) && (
          <Header 
            handleBurgerClick={handleBurgerClick}
            isBurgerOpen={isBurgerMenuOpen}
            onClose={closeBurgerMenu}
          />
        )}
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route
              path="/profile"
              element={
                <>
                  {" "}
                  <Profile />{" "}
                </>
              }
            />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}


export default App;

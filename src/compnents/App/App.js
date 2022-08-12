import React from 'react';
import { useNavigate, Route, Routes, Navigate, } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PopupSignin from '../PopupSignin/PopupSignin';
import PopupSignup from '../PopupSignUp/PopupSignup';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import PopupMenu from '../PopupMenu/PopupMenu';
import PopupRegisterSuccess from '../PopupRegisterSuccess/PopupRegisterSuccess';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isRegisterSuccessPopupOpen, setIsRegisterSuccessPopupOpen] = useState(false);;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();


    function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsRegisterSuccessPopupOpen(false);
    setIsMenuOpen(false);
  }
  
  useEffect(() => {
    const closeByEscape = (event) => {
      if (event.key === 'Escape') {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);
  

    function handleLoginClick() {
      setIsLoginPopupOpen(true);
  }

  
    // function handleRegisterClick() {
    //   setIsRegisterPopupOpen(true);
    // }
    
    function handleLogout() {
      setIsLoggedIn(false);
      closeAllPopups();
       navigate('/');
    }
    
    function handleLoginSubmit(event) {
      setIsLoggedIn(true);
      setIsLoginPopupOpen(false);
    }
  
  function handleRegisterSubmit(event) {
    setIsRegisterPopupOpen(false);
    setIsRegisterSuccessPopupOpen(true);
  }
  
  function handleNavigationMenu() {
    setIsMenuOpen(true);
  }

   const openDifferentPopups = () => {
     setIsLoginPopupOpen(!isLoginPopupOpen);
     setIsRegisterPopupOpen(!isRegisterPopupOpen);
   };
  
   function handleRedircetLogin(event)  {
     closeAllPopups();
     setIsLoginPopupOpen(true);
   };
  
  return (
    <div className='App'>
      <Header
        onLoginClick={handleLoginClick}
        onMenuClick={handleNavigationMenu}
        isMenuOpen={isMenuOpen}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/saved-news' element={<SavedNews />} />
         */}
        <Route
          path='/saved-news'
          element={
            isLoggedIn ? (
              <SavedNews isLoggedIn={isLoggedIn} />
            ) : (
              <Navigate to='/' />
            )
          }
        />
      </Routes>
      <Footer />
      <PopupSignup
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        switchPopups={openDifferentPopups}
        onSubmit={handleRegisterSubmit}
      />
      <PopupRegisterSuccess
        name='RegisterSuccessPopup'
        isOpen={isRegisterSuccessPopupOpen}
        onClose={closeAllPopups}
        switchPopups={handleRedircetLogin}
      />
      <PopupSignin
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        switchPopups={openDifferentPopups}
        onSubmit={handleLoginSubmit}
      />
      <PopupMenu
        isOpen={isMenuOpen}
        onClose={closeAllPopups}
        isLoggedIn={isLoggedIn}
        onLoginClick={handleRedircetLogin}
        onLogoutClick={handleLogout}
      />
    </div>
  );
}
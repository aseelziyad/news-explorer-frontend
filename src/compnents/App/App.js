import React from 'react';
import { useNavigate, Route, Routes, useLocation, Navigate, } from 'react-router-dom';
import { Switch } from 'react';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PopupSignin from '../PopupSignin/PopupSignin';
import PopupSignup from '../PopupSignUp/PopupSignup';
import Main from '../Main/Main';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewCardList';
import SavedNews from '../SavedNews/SavedNews';
import PopupMenu from '../PopupMenu/PopupMenu';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import PopupRegisterSuccess from '../PopupRegisterSuccess/PopupRegisterSuccess';

export default function App() {
  // const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isRegisterSuccessPopupOpen, setIsRegisterSuccessPopupOpen] = useState(false);

  const [isStartSerching, setStartSearching] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userName, setUserName] = useState('BoJack');
  const {pathname} = useLocation();
  // const onMainPage = location.pathname() === '/';
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
      // setIsLoggedIn(true);
  }
    // function headerPopupClick() {
    //   setIsLoginPopupOpen(true);
    // }
  
    function handleRegisterClick() {
      setIsRegisterPopupOpen(true);
    }
  
    
    function handleLogout() {
      setIsLoggedIn(false);
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


  //    function handleSignupSuccess() {
  //      setIsRegisterSuccessPopupOpen(true);
  //    }
  
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
        onLoginClick={handleRedircetLogin}
        onLogoutClick={closeAllPopups}
      />
      {/* <Route path='/saved-news' element={<SavedNews />} /> */}
      {/* </Switch> */}
    </div>
  );
}
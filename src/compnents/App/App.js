import React from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PopupSignin from '../PopupSignin/PopupSignin';
import PopupSignup from '../PopupSignUp/PopupSignup';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import PopupMenu from '../PopupMenu/PopupMenu';
import PopupRegisterSuccess from '../PopupRegisterSuccess/PopupRegisterSuccess';
import { register, authorize, checkToken } from '../../utils/Auth';
import api from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import ProtectedRoute from '../ProtectedRoute';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isRegisterSuccessPopupOpen, setIsRegisterSuccessPopupOpen] =
    useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    name: '',
  });

  function handleRegister({ email, password, name }) {
    register({ email, password, name })
      .then((res) => {
          setIsRegistered(true);
          setIsRegisterSuccessPopupOpen(true);
      })
      .catch((err) => {
        setIsRegistered(false);
      })
      .finally(() => {
        setIsRegisterPopupOpen(false);
      });
  }

  function setcurrentUserInfo() {
    api
      .getCurrentUser()
      .then((res) => {
        if (res && res.user) {
          localStorage.setItem('name', res.user.name);
          setCurrentUser({ ...currentUser, ...res.user });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin({ email, password }) {
    authorize({ email, password })
      .then((data) => {
        if (data && data.token) {
          localStorage.setItem('jwt', data.token);
          // checkIsLoggedIn();
          setIsLoggedIn(true);
          setcurrentUserInfo();
          setIsLoginPopupOpen(false);
        } else {
          throw new Error('No token recieved');
        }
      })
      .catch((err) => {
      });
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('name');
    setValues(null);
    setCurrentUser({});
    closeAllPopups();
  }

  const getSavedArticles = async () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      return await api.getSavedArticles();
    }
  };

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
    };
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);

  useEffect(() => {
    const handleCloseonClick = (event) => {
      if (event.target.classList.contains('popup_active')) {
        closeAllPopups();
      }
    };
    document.addEventListener('mousedown', handleCloseonClick);
    return () => document.removeEventListener('mousedown', handleCloseonClick);
  }, []);

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
  }

  function handleNavigationMenu() {
    setIsMenuOpen(true);
  }

  const openDifferentPopups = () => {
    setIsLoginPopupOpen(!isLoginPopupOpen);
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
  };

  function handleRedircetLogin(event) {
    closeAllPopups();
    setIsLoginPopupOpen(true);
  }

  useEffect(() => {
       const token = localStorage.getItem('jwt');
        token &&
       checkToken(token)
         .then((user) => {
           if (user) {
             setIsLoggedIn(true);
           }
         })
         .catch((err) => {
           console.log(err);
           setIsLoggedIn(false);
         });
  }, [])
  
  // function checkIsLoggedIn() {
  //   const token = localStorage.getItem('jwt');
  //   if (!token) {
  //     setIsLoggedIn(false);
  //   }
  //   checkToken(token)
  //     .then((user) => {
  //       if (user) {
  //         setIsLoggedIn(true);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsLoggedIn(false);
  //     });
  // }

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          onLoginClick={handleLoginClick}
          onMenuClick={handleNavigationMenu}
          isMenuOpen={isMenuOpen}
          isLoggedIn={isLoggedIn}
          onLogoutClick={handleLogout}
          name={currentUser.name}
        />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='/saved-news'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedNews getSavedArticles={getSavedArticles} />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <PopupSignup
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          switchPopups={openDifferentPopups}
          onSubmit={handleRegister}
          name={currentUser.name}
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
          onSubmit={handleLogin}
          name={currentUser.name}
        />
        <PopupMenu
          isOpen={isMenuOpen}
          onClose={closeAllPopups}
          isLoggedIn={isLoggedIn}
          onLoginClick={handleRedircetLogin}
          onLogoutClick={handleLogout}
          name={currentUser.name}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

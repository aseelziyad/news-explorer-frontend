/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function header(props) {
  const {
    onLoginClick,
    onMenuClick,
    isMenuOpen,
    isLoggedIn,
    onLogoutClick,
    name,
  } = props;
  const { pathname } = useLocation();
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <header
      className={`header ${pathname === '/saved-news' && 'header_saved'}`}
    >
      <h1
        className={`header__title ${
          pathname === '/saved-news' && 'header__title-saved'
        }`}
      >
        NewsExplorer
      </h1>
      <Navigation
        onLoginClick={onLoginClick}
        onMenuClick={onMenuClick}
        isMenuOpen={isMenuOpen}
        isLoggedIn={isLoggedIn}
        onLogoutClick={onLogoutClick}
        name={currentUser.name}
      />
    </header>
  );
}

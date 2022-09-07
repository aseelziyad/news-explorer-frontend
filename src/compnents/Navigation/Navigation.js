import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import logoutIcon from '../../images/sign-out-white.svg';
import logoutIconBlack from '../../images/sign-out-black.svg';
import menu from '../../images/menu.svg';
import menuBlack from '../../images/menu-black.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navigation(props) {
  const {
    onLoginClick,
    onMenuClick,
    isMenuOpen,
    isLoggedIn,
    onLogoutClick,
    name,
  } = props;
  // const currentUser = React.useContext(CurrentUserContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleNavigationButton() {
    if (!isLoggedIn) {
      onLoginClick();
      navigate('/');
    } else {
      onLogoutClick();
      navigate('/');
    }
  }

  return (
    <nav className='navigation'>
      <Link
        to='/'
        className={`navigation__link ${
          pathname === '/' && 'navigation__link_clicked'
        } ${pathname === '/saved-news' && 'navigation__link_saved'}
              
            `}
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          to='/saved-news'
          className={`navigation__link
              ${
                pathname === '/saved-news' &&
                'navigation__link_saved navigation__link-clicked_saved'
              }
            `}
        >
          Saved articles
        </Link>
      )}

      <button
        type='button'
        className={`navigation__button navigation__link ${
          pathname === '/saved-news' && 'navigation__link_saved'
        } ${!isLoggedIn && 'navigation__button'}`}
        onClick={handleNavigationButton}
      >
        {isLoggedIn ? (
          <>
            <p
              className={`navigation__button-text  ${
                pathname === '/saved-news' && 'navigation__button-text_saved'
              }`}
            >
              {localStorage.getItem('name')}
            </p>
            <img
              className='navigation__button-logo'
              src={pathname === '/' ? logoutIcon : logoutIconBlack}
              alt='logout'
            />
          </>
        ) : (
          'Sign in'
        )}
      </button>
      {!isMenuOpen && (
        <button className='navigation__menu' onClick={onMenuClick}>
          <img src={pathname === '/' ? menu : menuBlack} alt='menu' />
        </button>
      )}
    </nav>
  );
}

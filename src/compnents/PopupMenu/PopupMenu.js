/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function PopupMenu(props) {
  const { isOpen, onClose, isLoggedIn, onLoginClick, onLogoutClick } = props;
 const currentUser = React.useContext(CurrentUserContext);
//  const [name, setName] = useState('');
  const { pathname } = useLocation();

  return (
    <div className={`popup__menu ${isOpen && 'popup__menu_open'}`}>
      <button
        type='button'
        className='popup__menu-close-button'
        onClick={onClose}
      ></button>
      <nav>
        {!isLoggedIn ? (
          <Link to='/' className='popup__menu-link'>
            Home
          </Link>
        ) : (
          <Link to='/saved-news' className='popup__menu-link'>
            Saved articles
          </Link>
        )}
        {pathname === '/saved-news' && (
          <Link to='/' className='popup__menu-link'>
            Home
          </Link>
        )}
      </nav>
      {!isLoggedIn ? (
        <button
          type='submit'
          className='popup__menu-submit-button'
          onClick={onLoginClick}
        >
          Sign in
        </button>
      ) : (
        <button
          type='button'
          className='popup__menu-submit-button'
          onClick={onLogoutClick}
        >
          {currentUser.name}
        </button>
      )}
    </div>
  );
}

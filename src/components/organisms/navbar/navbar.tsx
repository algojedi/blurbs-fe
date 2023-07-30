import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/theme-provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';

export const NavBar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <div className='d-flex align-items-center navbar_brand-and-toggle'>
          <Link className='navbar-brand' to='/'>
            BLURBS
          </Link>
          <FontAwesomeIcon
            icon={faLightbulb}
            role='button'
            className={`lightbulb-${theme.name}`}
            onClick={toggleTheme}
          />
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/posts'>
                Posts
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/profile'>
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

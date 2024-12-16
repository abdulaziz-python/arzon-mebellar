import React from 'react'
import logo from '../assets/images/cp.svg'
import { NavLink } from 'react-router-dom';

export default function HeaderNav() {
  return (
    <nav className='HeaderNav'>
      <div className="logo">
        <NavLink to='/'>
          <img className='header-logo' src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="header-links">
        <div className="container">
          <ul className='header-nav'>
            <li>
              <NavLink to='/'>Главная</NavLink>
            </li>
            <li>
              <NavLink to='/about'>О нас</NavLink>
            </li>
            <li>
              <NavLink to='/products'>Продукция</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Контакты</NavLink>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

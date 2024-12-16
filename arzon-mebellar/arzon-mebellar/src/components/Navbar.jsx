import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/nav-logo.svg'

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 70) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavbar);


  return (
    <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
      <div className="container">
        <div className="nav-body">
        
          <NavLink to='/'>
           
            <img className='nav-logo' src={logo} alt="logo" />
          </NavLink>

          <ul className='nav-links'>
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

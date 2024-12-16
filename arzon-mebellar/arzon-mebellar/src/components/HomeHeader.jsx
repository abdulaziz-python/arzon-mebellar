import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import logo from '../assets/images/cp.svg'
import { NavLink } from 'react-router-dom';

export default function HomeHeader() {
  return (
    <header className='HomeHeader'>
      <div className="logo">
        <img className='header-logo' src={logo} alt="logo" />
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
      <Carousel className='carusel' fade>
        
        <Carousel.Item className='carusel-item'>
          <div className="carusel-img">
            <img src={img1} alt="carusel-img" />
          </div>
          <Carousel.Caption fade className='carusel-caption'>
            <div className="container">
              <div className="carusel-info">
                <div>
                  <h1>Добро пожаловать<br />на наш веб-сайт</h1>
                  <h5>Мы предлагаем широкий ассортимент качественной <br /> мебели для дома и офиса</h5>
                  <button><h4>Смотреть каталог</h4></button>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='carusel-item'>
          <div className="carusel-img">
            <img src={img3} alt="carusel-img" />
          </div>
          <Carousel.Caption fade className='carusel-caption'>
            <div className="container">
              <div className="carusel-info">
                <div>
                  <h1>Добро пожаловать в <br />  наш мир комфорта <br /> и стиля!</h1>
                  <h5>Создайте уют и комфорт в вашем доме вместе с нами!</h5>
                  <button><h4>Смотреть каталог</h4></button>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='carusel-item'>
          <div className="carusel-img">
            <img src={img2} alt="carusel-img" />
          </div>
          <Carousel.Caption className='carusel-caption'>
            <div className="container">
              <div className="carusel-info">
                <div>
                  <h1>Мы предлагаем вам <br /> качественную <br /> продукцию</h1>
                  <h5>У нас вы найдете мебель для любого бюджета. </h5>
                  <button><h4>Смотреть каталог</h4></button>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      
      </Carousel>
    </header>
  )
}

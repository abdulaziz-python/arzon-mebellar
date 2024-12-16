import React from 'react'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className='gold'>Телефон</h5>
            <a className='tel' href="tel:+998338001313">+998338001313</a>
          </div>
          <div className="middle col-md-4">
            <h5 className='gold'>Электронная почта</h5>
            <p>comfortpremium13@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h5 className="gold">Адрес</h5>
            <p>квартал Мойкургон стрит дом 49, 100190, Tashkent</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Cmfort Premium. Все права защищены.</p>

          <p>Разработка и реклама <a className='site' target='_blank' href="https://www.instagram.com/webmarketing.uz/">WEB MARKETING</a></p>
        </div>
      </div>
    </footer>
  )
}

import React from 'react'
import youtube from '../assets/images/youtube-logo-2431.svg'

export default function ContactBody() {
  return (
    <section className='ContactBody'>
      <div className="container">
        <h2 className="tittle mb-5">СВЯЗАТЬСЯ <span>С НАМИ</span></h2>
        <div className="row">

          <div data-aos="fade-up" className="body-info col-md-4">
            <h5 className='mb-4'>ARZON MEBELLAR</h5>
            <p className='body-txt'>Вы можете связаться с нами по телефону, электронной почте и через приложения для социальных сетей.</p>
            <div className="d-flex">
              <a target='_blank' href="https://www.instagram.com/comfort_mebel_2018/">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="38px" height="38px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>

              </a>

              <a target='_blank' href="https://t.me/Comfort_mebel_2018">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="38px" height="38px"><path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"/><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"/><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"/></svg>

              </a>

              <a href="#">
                <img className='socials' src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
          <div data-aos="fade-up" className="body-info col-md-4">
            <h5 className='mb-4'>Контактная информация</h5>
            <a href="tel:+998338001313">
              <p className='body-txt'><span>Телефон : </span> +998338001313</p>
            </a>

            <p className="body-txt"><span>Электронная почта:</span> comfortpremium13@gmail.com</p>
            <p className="body-txt"><span>Адрес :</span> квартал Мойкургон стрит дом 49, 100190, Tashkent</p>
          </div>
          <div data-aos="fade-up" className="body-info col-md-4">
            <h5 className='mb-4'>Контактная форма</h5>
            <form action="">
              <div className="row">
                <div className="col-12 mb-2">
                  <input placeholder='Ваша имя' type="text" />
                </div>

                <div className="col-12 mb-2">
                  <input placeholder='Номер телефона' type="text" />
                </div>

                <div className="col-12 mb-2">
                  <textarea placeholder='Сообщение' name="" id=""></textarea>
                </div>
                <div className="col-12">
                  <button>Отправлять</button>
                </div>
              </div>
            </form>
          </div>
          <div className="mb-5"></div>
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23958.26553924923!2d69.25168530231686!3d41.36825865726839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d169341d2ed%3A0x948837c71bf30611!2sComfort%20Mebel!5e0!3m2!1sru!2s!4v1733494751988!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

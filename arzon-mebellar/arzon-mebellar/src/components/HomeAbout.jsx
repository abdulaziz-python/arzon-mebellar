import React from 'react'
import img from '../assets/images/about.jpg'

export default function HomeAbout() {
  return (
    <section className='HomeAbout'>
      <div className="container">
        
        <div className="row row1">
          
          <div data-aos="fade-right" className="col-md-6">
            <h1 className='tittle'> arzon mebellar <span>о нас</span></h1>
            <h4>Мебельная фабрика "Arzon Mebellar" - это частная компания, основанная в 2007 году в городе Ташкенте. Мы производим современную, качественную и прочную мебель, которая полностью отвечает индивидуальным потребностям и предпочтениям наших клиентов.
            Выбирайте качественную мебель от производителя и создавайте комфорт в своем доме вместе с нами!</h4>
          </div>
          <div data-aos="fade-left" className="col-md-6">
            <img className='about-img' src={img} alt="about" />
          </div>
        </div>

        <div className="row primushestva">
          
          <div data-aos="fade-up" className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3>Качество продукции</h3>
                <p>Мы предлагаем только качественную продукцию, которая произведена из надежных материалов и отвечает всем современным требованиям. Мы уделяем особое внимание каждой детали и гарантируем долговечность и комфорт нашей мебели.</p>
                <h2 className="numb">01</h2>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3>Индивидуальный подход</h3>
                <p>Мы ценим каждого клиента и предлагаем индивидуальный подход к каждому заказу. Мы готовы изготовить мебель по вашим размерам и дизайну, чтобы она идеально соответствовала вашим потребностям</p>
                <h2 className="numb">02</h2>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3>Быстрая доставка и удобная оплата</h3>
                <p>Мы ценим ваше время и предлагаем быструю доставку и удобные варианты оплаты. Наша служба поддержки готова помочь вам с выбором мебели и ответить на все ваши вопросы.</p>
                <h2 className="numb">03</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

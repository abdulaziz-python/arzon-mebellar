import React from 'react'
import tg from '../assets/images/tg.svg'

export default function TgLink() {
  return (
    <div className='TgLink'>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>Подпишитесь на наш канал в Telegram!</h2>
            <p>Узнайте первыми о выгодных предложениях мебели</p>
          </div>
          <div className="col-md-4">
            <button>
              Наш канал в Telegram
              <a target='_blank' href="https://t.me/comfortsvet">
              
                <span>
                  <img src={tg} alt="telegram" />
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

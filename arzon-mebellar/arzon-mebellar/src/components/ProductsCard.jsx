import React from 'react'
import '../styles/card.css'
import { Link } from 'react-router-dom'

export default function ProductsCard() {
  return (
    <section className='ProductsCard'>
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 mb-3">
            <div className="card kard card1">
              <div className="card-content">
                <h2 className="card-title">Диваны</h2>
                <p className="card-body">
                </p>
                <Link className='button' to='/products'>Посмотреть </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card2">
              <div className="card-content">
                <h2 className="card-title">Мягкие мебели</h2>
                <p className="card-body">
                </p>
                <Link className='button' to='/products'>Посмотреть </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

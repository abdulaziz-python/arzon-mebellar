import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Otziv() {
  return (
    <section className='Otziv'>
      <div className="container">
        <h2 className='tittle mb-5'>Видео <span>отзывы</span></h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='mb-5'>
            <iframe src="https://www.youtube.com/embed/cF1RVWalDv4?si=xT0_RxKakqE9su8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe  src="https://www.youtube.com/embed/84GBVQR1F2A?si=MZntj8r5hsuxoYyn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe  src="https://www.youtube.com/embed/LuKjW0lYcpI?si=O787MYf8rYUt6URh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe  src="https://www.youtube.com/embed/4g44AWUCcCs?si=zjXfQceMiNZLJSdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe  src="https://www.youtube.com/embed/pGKauUeApD0?si=v1YI3gsReUGKqEfi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  )
}

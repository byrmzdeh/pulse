import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.scss';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SlickSlider = () => {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className='photo'>
        <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg" alt="err" />
        <div className="text">
            <h1>Special Dish</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className='photo'>
        <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide className='photo'>
        <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg" alt="" />
      </SwiperSlide>
     
    </Swiper>
  </>

  )
}

export default SlickSlider

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      className='mx-4'
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      ...
    </Swiper>
  );
};
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';

// Import Swiper styles
import 'swiper/css';
import { BACKEND_API } from '../../constant';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

 const SwiperResearch = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const url = `${BACKEND_API}/keyResearchArea`;
  const promise = axios.get(url);
  promise.then((res) => {
    const data = res.data.data.keyReasearchAreaData;
    setNotes(data);
    //  console.log(data);
  });

  }, []);
  return (
    <Swiper
      className='mx-4'
      spaceBetween={50}
      slidesPerView={1}
      pagination={true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {notes.length !=0 && notes.map((item, index) => {
        return (
          <SwiperSlide>

<Card head={item.keyResearchAreaTitle} content={item.keyResearchAreaDescription} image={item.imagePath} type="reas" />
          </SwiperSlide>
        );
      })}
    
    </Swiper>
  );
};

export default SwiperResearch;
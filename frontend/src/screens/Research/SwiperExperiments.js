// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';

// Import Swiper styles
import 'swiper/css';
import { BACKEND_API } from '../../constant';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

 const SwiperExperiments = () => {
    const [notes, setNotes] = useState([]);
 
    useEffect(() => {
      const url = `${BACKEND_API}/experimentalFacilities`;
    const promise = axios.get(url);
    promise.then((res) => {
      const data = res.data.data.ExperimentalFacilitiesData;
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

<Card key={index} head={item.experimentalFacilitiesTitle} image={item.experimentalFacilitiesImage} type="exp"/>
          </SwiperSlide>
        );
      })}
    
    </Swiper>
  );
};

export default SwiperExperiments;
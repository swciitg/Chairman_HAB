import img1 from "./image1.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Aboutus from "../../components/Aboutus/About";
import React, { useEffect, useState } from 'react'
import { BACKEND_API } from '../../constant';
import axios from 'axios';

const HomeScreen = () => {
  const [images,setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_API}/homePageImage`, {
      })
      .then((response) => {
        const data = response.data;
        if (data.status === "success") {
          console.log(data)
          setImages(data.data.Data);
        } else {
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);


  return (
    <>
    <Splide aria-label="My Favorite Images">
     {images.length !== 0 &&
                images.map((data, idx) => {
                  return (
                    <SplideSlide>
                      <img className="w-full" src={`${BACKEND_API}/uploads/home/${data?.imagePath}`} alt="Image 1" />
                    </SplideSlide>
                  );
                })}
      </Splide>
      <Aboutus/>
    
    </>
  );
};

export default HomeScreen;

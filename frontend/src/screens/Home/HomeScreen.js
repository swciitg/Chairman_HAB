import React from "react";
import img1 from "./image1.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const HomeScreen = () => {
  return (
    <>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img className="w-full" src={img1} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img className="w-full" src={img1} alt="Image 2" />
        </SplideSlide>
      </Splide>
    </>
  );
};

export default HomeScreen;

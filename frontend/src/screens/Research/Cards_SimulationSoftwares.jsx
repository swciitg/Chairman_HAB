import React, { useState } from "react";
import Cards from "./VisCards3";
import HiddenCards from "./HiddenCards3";
import Swiper from "./Swiperr";
import SwiperSoftware from "./SwiperSoftware";

const SimulationSoftware = () => {
  const [state, setState] = useState(0);
  const [string, setString] = useState("SEE ALL");

  const togglebtn = () => {
    if (state === 0) {
      setState(1);
      setString("SEE LESS");
    } else {
      setState(0);
      setString("SEE ALL");
    }
  };

  const style = { color: "#1c1c1c" };

  return (
    <>
      <div className="mt-12 mx-20">
        <div className="md:flex md:flex-row md:justify-between mt-4 md:mb-8">
          <h1
            className="font-semibold text-xl underline md:text-5xl"
            style={style}
          >
            Simulation Softwares
          </h1>
          <input
            type="button"
            value={string}
            onClick={togglebtn}
            class="invisible md:visible bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg"
          />
        </div>
        <Cards />
        {state ? <HiddenCards /> : null}
      </div>
      <div className="md:hidden">
        <SwiperSoftware />
      </div>
    </>
  );
};

export default SimulationSoftware;

import React, { useState } from "react";
import Cards from "./VisCards";
import HiddenCards from "./HiddenCards";
import Swiper from "./Swiperr";
import axios from "axios";
import multer from "multer";
const upload = multer({ dest: "../../../backend/uploads/" });

const ResearchScreen = () => {
  const [state, setState] = useState(0);
  const [string, setString] = useState("SEE ALL");

  const url = "http://localhost:5000/api/projects";
  const promise = axios.get(url);
  promise.then((res) => {
    console.log(res.data.data.Project);
  });

  const togglebtn = () => {
    if (state === 0) {
      setState(1);
      setString("SEE LESS");
    } else {
      setState(0);
      setString("SEE ALL");
    }
    // state == 0 && setState(1) && setString("SEE LESS");
    // state == 1 && setState(0) && setString("SEE MORE");
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
            Key Research Areas
          </h1>
          <input
            type="button"
            value={string}
            onClick={togglebtn}
            class="invisible md:visible bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg"
          />
        </div>
        {/* <Head name="Key Research Areas" /> */}
        <Cards />
        {state ? <HiddenCards /> : null}
      </div>
      <div className="md:hidden">
        <Swiper />
      </div>
    </>
  );
};

export default ResearchScreen;

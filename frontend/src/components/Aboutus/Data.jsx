import styles from "./About.module.css";
import React, { useState } from "react";
import axios from "axios";

import { BACKEND_API } from "../../constant/index";
import { useEffect } from "react";

const Data = () => {
  const [aboutus, setAboutus] = useState([]);
  // const url = "http://localhost:5000/api/about";

  
  useEffect(() => {
    const promise = axios.get(`${BACKEND_API}/about`, {});
  promise.then((res) => {
    const data = res.data.data.AboutData;
    setAboutus(data);
    // console.log(data);
  });
  }, []);


  return (
    <>
      {aboutus.length !== 0 &&
        aboutus.map((data, idx) => {
          return (
            <>
              <div
                key={idx}
                className={`${styles.details1} flex justify-center items-center`}
              >
                {data?.description}
              </div>
            </>
          );
        })}
    </>
  );
};

export default Data;

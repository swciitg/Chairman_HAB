import styles from "./About.module.css"
import React, { useState } from "react";
import axios from "axios";




const Data = () => {
  const [aboutus, setAboutus] = useState([]);
  const url = "http://localhost:5000/api/about";
  const promise = axios.get(url);
  promise.then((res) => {
    const data = res.data.data;
    setAboutus(data);
    console.log(data);
  });




  return (
    <>
     

        {aboutus.length !== 0 &&
          aboutus.map((data) => {
            return (
              <>
               <div  key={idx} className={`${styles.details1} flex justify-center items-center`}>
                {data?.description}
                </div>
              </>
            );
          })}
     

    </>
  );
}

export default Data;



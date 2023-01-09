import styles from "./Members.module.css";
import React, { useState } from "react";

import axios from "axios";
import { useEffect } from "react";
import { BACKEND_API } from "../../constant";
const Collaberatorscards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${BACKEND_API}/collaborator`, {});
    promise.then((res) => {
      const data = res.data.data.Collaborator;
      setCards(data);
      // console.log(data);
    });

  }, []);

 
  return (
    <>
      
      {cards.length !== 0 &&
                    cards.map((data, idx) => {
                      return (
                        <div key={idx}
                        className={`flex flex-col justify-center bg-white ${styles.collaberators_cards}`}
                      >
                        <div>
                          <b> 
          {data?.collaboratorName}
                             </b>
                        </div>
                  
                        <div>
          ({data?.designation},{data?.universityName},{data?.countryName})


                        </div>
                          </div>
     
    );
  })}
     
        </>
  );
};
export default Collaberatorscards;




  

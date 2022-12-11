import styles from "./Members.module.css";
import React, { useState } from "react";

import axios from "axios";
const Collaberatorscards = () => {
  const [cards, setCards] = useState([]);
  const url = "http://localhost:5000/api/collaborator";
  const promise = axios.get(url);
  promise.then((res) => {
    const data = res.data.data.Collaborator;
    setCards(data);
    // console.log(data);
  });
  return (
    <>
      
      {cards.length !== 0 &&
                    cards.map((data, idx) => {
                      return (
                        <div key={idx}
                        className={`flex flex-col justify-center ${styles.collaberators_cards}`}
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




  

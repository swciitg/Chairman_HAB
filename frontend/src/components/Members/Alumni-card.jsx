import styles from "./Members.module.css";
import Pic from'./pic.png';
import React, { useState } from "react";

import axios from "axios";

const Alumnicards = () => {

  const [cards, setCards] = useState([]);
  const url = "http://localhost:5000/api/Alumni";
  const promise = axios.get(url);
  promise.then((res) => {
    const data = res.data.data;
    setCards(data);
    // console.log(data);
  });
  return (
    <>
    
    {cards.length !== 0 &&
                    cards.map((data, idx) => {
                      return (
       <div key={idx}
        className={`flex items-center justify-center   ${styles.alumni_cards}`}
    >
      <div
        className={` ${styles.members_cardsimg} flex justify-center items-center w-1/3`}
      >
        <img scr={Pic} alt="" />
      </div>
      <div className={`${styles.members_cardscontent}  flex  flex-col `}>
        <div className={` ${styles.research_groupdetails1}`}>
        {" "}
           {data?.alumniName}
        </div>
        <br />
        <div className={` ${styles.research_groupdetails2}`}>
          {data?.designation}
     
        </div>
        <div className={` ${styles.research_groupdetails3}`}></div>

        <div className={` ${styles.research_groupdetails3}`}>
        {" "}
        Year of completion: {data?.yearOfCompletion}
        </div>
        <div className={` ${styles.research_groupdetails3}`}>
         {data?.nameOfInstitution}
        </div>
        <div className={` ${styles.research_groupdetails3}`}>
        Email:  {data?.email}
        </div>
        <div className={` ${styles.research_groupdetails3}`}>
        Phone:  +91 ({data?.phone})
        </div>
      </div>
    </div>
    );
  })}
    </>
  );
};
export default Alumnicards;

  
                        
            
                   
                      
          
       
  
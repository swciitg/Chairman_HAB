
import styles from "./Members.module.css";
import React, { useState } from "react";

import axios from "axios";

const PastMembers = () => {
  const [cards, setCards] = useState([]);
  const url = "http://localhost:5000/api/PastMembers";
  const promise = axios.get(url);
  promise.then((res) => {
    const data = res.data.data.PastMember;
    setCards(data);
    // console.log(data);
  });

  return (
    <>
     {cards.length !== 0 &&
                  cards.map((data, idx) => {
                    return (
                      <div key={idx} className={`flex items-center  ${styles.pastmembers_cards}`}>
                            <b> {data?.pastMemberName}</b> (  {data?.qualificationOfStudent} , {data?.yearOfProjectCompletion} )
                          </div>
      );
    })}
    </>
  );
};
export default PastMembers;
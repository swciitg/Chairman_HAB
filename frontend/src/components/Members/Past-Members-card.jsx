import styles from "./Members.module.css";
import React, { useState } from "react";

import axios from "axios";
import { useEffect } from "react";
import { BACKEND_API } from "../../constant";

const PastMembers = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${BACKEND_API}/PastMembers`, {});
    promise.then((res) => {
      const data = res.data.data.PastMember;
      setCards(data);
      // console.log(data);
    });
  }, []);

  return (
    <>
      {cards.length !== 0 &&
        props.state == "1" &&
        cards.map((data, idx) => {
          return (
            <div
              key={idx}
              className={`flex items-center bg-white  ${styles.pastmembers_cards}`}
            >
              <b> {data?.pastMemberName}</b> ( {data?.qualificationOfStudent} ,{" "}
              {data?.yearOfProjectCompletion} )
            </div>
          );
        })}
      {cards.length !== 0 &&
        props.state === "0" &&
        cards.map((data, idx) => {
          if (idx > 2) return;
          return (
            <div
              key={idx}
              className={`flex items-center bg-white  ${styles.pastmembers_cards}`}
            >
              <b> {data?.pastMemberName}</b> ( {data?.qualificationOfStudent} ,{" "}
              {data?.yearOfProjectCompletion} )
            </div>
          );
        })}
    </>
  );
};
export default PastMembers;

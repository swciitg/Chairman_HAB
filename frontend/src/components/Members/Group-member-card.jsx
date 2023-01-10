import styles from "./Members.module.css";
import Pic from "./pic.png";
import React, { useState } from "react";

import axios from "axios";
import { BACKEND_API } from "../../constant";
import { useEffect } from "react";
const Groupmembercards = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${BACKEND_API}/groupMembers`, {});
    promise.then((res) => {
      const data = res.data.data.GroupMembersData;
      setCards(data);
      // console.log(data);
    });
  }, []);
  return (
    <>
      {cards.length !== 0 &&
        props.state === 1 &&
        cards.map((data, idx) => {
          return (
            <div
              key={idx}
              className={`flex items-center justify-center bg-white ${styles.members_cards} `}
            >
              <div
                className={` ${styles.members_cardsimg}  flex justify-center items-center w-1/3`}
              >
                <img  src={`${BACKEND_API}/uploads/grp/${data?.imagePath}`} alt="" />
              </div>
              <div
                className={` ${styles.members_cardscontent}  flex  flex-col `}
              >
                <div className={` ${styles.research_groupdetails1}`}>
                  {" "}
                  {data?.memberName}
                </div>
                <br />
                <div className={` ${styles.research_groupdetails2}`}>
                  Department of Physics{" "}
                </div>
                <div className={` ${styles.research_groupdetails3}`}></div>
                <div className={` ${styles.research_groupdetails3}`}>
                  {" "}
                  {data?.designation}
                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                  {data?.researchInterest}
                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                  Google Scholar: {data?.googleScholar}
                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                  Email: {data?.email}
                </div>{" "}
                <div className={` ${styles.research_groupdetails3}`}>
                  Phone: {data?.phone}
                </div>
              </div>
            </div>
          );
        })}
      {cards.length !== 0 &&
        props.state === 0 &&
        cards.map((data, idx) => {
          if (idx > 1) return;
          return (
            <div
              key={idx}
              className={`flex items-center justify-center bg-white ${styles.members_cards} `}
            >
              <div
                className={` ${styles.members_cardsimg}  flex justify-center items-center w-1/3`}
              >
                <img src={`${BACKEND_API}/uploads/grp/${data?.imagePath}`} alt="" />
              </div>
              <div
                className={` ${styles.members_cardscontent}  flex  flex-col `}
              >
                <div className={` ${styles.research_groupdetails1}`}>
                  {" "}
                  {data?.memberName}
                </div>
                <br />
                <div className={` ${styles.research_groupdetails2}`}>
                  Department of Physics{" "}
                </div>
                <div className={` ${styles.research_groupdetails3}`}></div>
                <div className={` ${styles.research_groupdetails3}`}>
                  {" "}
                  {data?.designation}
                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                  {data?.researchInterest}
                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                  Google Scholar: {data?.googleScholar}
                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                  Email: {data?.email}
                </div>{" "}
                <div className={` ${styles.research_groupdetails3}`}>
                  Phone: {data?.phone}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Groupmembercards;

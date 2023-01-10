import Alumnicards from "./Alumni-card";
import Collaberatorscards from "./Collaberators-card";
import Groupmembercards from "./Group-member-card";
import styles from "./Members.module.css";
import PastMembers from "./Past-Members-card";
import Pic from "./pic.png";
import React, { useState } from "react";

import axios from "axios";
import { useEffect } from "react";
import { BACKEND_API } from "../../constant";

const Members = () => {
  const [cards, setCards] = useState([]);
  const [PastMembersState, setPastMembersState] = useState("0");
  const [CollaboratorState, setCollaboratorState] = useState(0);
  const [AlumState, setAlumState] = useState(0);
  const [GroupMemberState, setGroupMemberState] = useState(0);

  useEffect(() => {
    const promise = axios.get(`${BACKEND_API}/Profile`, {});
    promise.then((res) => {
      const data = res.data.data.ProfileData;
      setCards(data);
      // console.log(data);
    });
  }, []);
  return (
    <>
      <div className={` ${styles.mainbody} flex flex-col`}>
        <div className={` ${styles.research_groupheading} flex items-center `}>
          {" "}
          Research Group
        </div>
        {cards.length !== 0 &&
          cards.map((data) => {
            return (
              <div
                className={`${styles.research_group} flex flex-col bg-white `}
              >
                <div
                  className={`flex items-center justify-evenly ${styles.research_groupcontent}  `}
                >
                  <div
                    className={` flex items-center justify-center ${styles.height1}`}
                  >
                    <img
                      className={` ${styles.imgheight1}`}
                      src={`${BACKEND_API}/uploads/prof/${data?.imagePath}`}
                      alt=""
                    />
                  </div>
                  <div
                    className={` flex justify-center items-center  ${styles.height3}`}
                  >
                    <div className={`w-1/2 flex  flex-col  ${styles.height4}`}>
                      <div className={`flex flex-col justify-center`}>
                        <div className={` ${styles.research_groupdetails1}`}>
                          {data?.proffessorName}
                        </div>
                        <br />
                        <div className={` ${styles.research_groupdetails2}`}>
                          {data?.proffessorDesignation}
                        </div>
                        <div className={` ${styles.research_groupdetails3}`}>
                          {data?.proffessorDepartment}
                        </div>

                        <div className={` ${styles.research_groupdetails3}`}>
                          {" "}
                          {data?.instituteName}
                        </div>
                        <div className={` ${styles.research_groupdetails3}`}>
                          Phone: {data?.officePhone} (Office) {data?.labPhone}{" "}
                          (Lab)
                        </div>
                        <div className={` ${styles.research_groupdetails3}`}>
                          Email: {data?.labEmail} ,{data?.personalEmail}
                        </div>
                      </div>
                    </div>

                    <div className={`w-1/2   ${styles.height4} flex  flex-col`}>
                      <div className={`flex flex-col justify-center`}>
                        <div className={` ${styles.research_groupdetails1}`}>
                          {" "}
                          Research profile
                        </div>
                        <br />
                        <div className={` ${styles.research_groupdetails3}`}>
                          OrcidID:{" "}
                          <span className={` ${styles.research_groupids}`}>
                            {data?.OrcidID}
                          </span>{" "}
                        </div>
                        <div className={` ${styles.research_groupdetails3}`}>
                          ResearcherID:{" "}
                          <span className={` ${styles.research_groupids}`}>
                            {data?.ReasearchID}
                          </span>
                        </div>

                        <div className={` ${styles.research_groupdetails3}`}>
                          {" "}
                          Scopus Author ID:{" "}
                          <span className={` ${styles.research_groupids}`}>
                            {data?.scopusAuthorID}
                          </span>{" "}
                        </div>
                        <div className={` ${styles.research_groupdetails3}`}>
                          Google Scholar:{" "}
                          <span className={` ${styles.research_groupids}`}>
                            {data?.googleScholarID}
                          </span>
                        </div>
                        <div className={` ${styles.research_groupdetails3}`}>
                          {/* <a href="">Education </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div className={`${styles.group_members}`}>
          <div
            className={`${styles.research_groupheading}  flex items-center `}
          >
            Group Members
          </div>
          <br />

          <br />
          <div className={`flex  ${styles.cards} ${styles.wild_cards} `}>
            <Groupmembercards state={GroupMemberState} />
          </div>
          <br />
          <div
            className={`flex items-center justify-center ${styles.loadButton} `}
          >
            <button onClick={(e) => {
                e.preventDefault();
                GroupMemberState === 0 ? setGroupMemberState(1) : setGroupMemberState(0);
              }}>
              <a
                href=""
                className={`${styles.load_button} flex items-center justify-center`}
              >
                {" "}
                LOAD MORE
                <span className={`${styles.drop_arrow} `}>&#8964; </span>{" "}
              </a>
            </button>
          </div>
        </div>
        <div className={` ${styles.alumni}`}>
          <div
            className={`${styles.research_groupheading}  flex items-center `}
          >
            Alumni(PhD Scholars)
          </div>
          <br />

          <br />
          <div className={`flex ${styles.cards} `}>
            <Alumnicards state={AlumState} />
          </div>
          <br />
          <div
            className={`flex items-center justify-center ${styles.loadButton} `}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                AlumState === 0 ? setAlumState(1) : setAlumState(0);
              }}
            >
              <a
                href=""
                className={`${styles.load_button} flex items-center justify-center`}
              >
                {" "}
                LOAD MORE
                <span className={`${styles.drop_arrow} `}>&#8964; </span>{" "}
              </a>
            </button>
          </div>
        </div>
        <div className={`${styles.past_members}`}>
          <div
            className={`${styles.research_groupheading}  flex items-center `}
          >
            Past members
          </div>
          <br />
          <br />
          <div className={`flex flex-col ${styles.cards}`}>
            <PastMembers state={PastMembersState} />
          </div>
          <br />
          <div
            className={`flex items-center justify-center ${styles.loadButton} `}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                PastMembersState === "0"
                  ? setPastMembersState("1")
                  : setPastMembersState("0");
              }}
            >
              <a
                href=""
                className={`${styles.load_button} flex items-center justify-center`}
              >
                {" "}
                LOAD MORE
                <span className={`${styles.drop_arrow} `}>&#8964; </span>{" "}
              </a>
            </button>
          </div>
        </div>
        <div className={` ${styles.collaberators}`}>
          <div
            className={`${styles.research_groupheading}  flex items-center `}
          >
            Collaborators
          </div>
          <br />
          <br />
          <div className={`flex flex-col ${styles.cards}`}>
            <Collaberatorscards state={CollaboratorState} />
          </div>
          <br />
          <div
            className={`flex items-center justify-center ${styles.loadBUtton}`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                CollaboratorState === 0
                  ? setCollaboratorState(1)
                  : setCollaboratorState(0);
              }}
            >
              <a
                href=""
                className={`${styles.load_button} flex items-center justify-center`}
              >
                {" "}
                LOAD MORE
                <span className={`${styles.drop_arrow} `}> &#8964; </span>{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Members;

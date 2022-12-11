
import styles from "./Members.module.css";
import React, { useState } from "react";

import axios from "axios";

const PastMembers = () => {
  const [notes, setNotes] = useState([]);
  const url = "http://localhost:5000/api/PastMembers";
  const promise = axios.get(url);
  promise.then((res) => {
    const data = res.data.data.PastMember;
    setNotes(data);
    // console.log(data);
  });

  return (
    <div className={`flex items-center  ${styles.pastmembers_cards}`}>
<b> Shivam Rajguru</b> (B.tech project student, 2020-2021)
    </div>
  );
};
export default PastMembers;

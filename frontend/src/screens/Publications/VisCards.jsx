import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const VisCards = () => {
  const [notes, setNotes] = useState([]);
  const url = "http://localhost:5000/api/journalPublications";
  const promise = axios.get(url);
  promise.then((res) => {
    const data = res.data.data.JournalPublication;
    setNotes(data);
    // console.log(data);
  });

  return (
    <>
      {notes.slice(0, 3).map((item, index) => {
        return (
          <Card key={index} head={item.journaltitle} bold={item.journalname} />
        );
      })}
    </>
  );
};

export default VisCards;

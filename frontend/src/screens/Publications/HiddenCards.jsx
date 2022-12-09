import React from "react";
import Card from "./Card";
import axios from "axios";

let data = 0;
const url = "http://localhost:5000/api/journalPublications";
const promise = axios.get(url);
promise.then((res) => {
  data = res.data.data.JournalPublication;
  console.log(data);
});

const HiddenCards = () => {
  return (
    <>
      {data.slice(3,data.length).map((item, index) => {
        return (
          <Card key={index} head={item.journaltitle} bold={item.journalname} />
        );
      })}
    </>
  );
};

export default HiddenCards;

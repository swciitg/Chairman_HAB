// books

import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { BACKEND_API } from "../../constant";

const HiddenCards = () => {
  const [notes, setNotes] = useState([]);
  const url = `${BACKEND_API}/books`;
  const promise = axios.get(url);
  promise.then((res) => {
    const data = res.data.data.Book;
    setNotes(data);
    // console.log(data);
  });
  return (
    <>
      {notes.slice(3, notes.length).map((item, index) => {
        return (
            <Card key={index} head={item.booktitle} bold={item.bookname} />
        );
      })}
    </>
  );
};

export default HiddenCards;

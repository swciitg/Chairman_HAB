// books

import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { BACKEND_API } from "../../constant";

const VisCards = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const url = `${BACKEND_API}/books`;
  const promise = axios.get(url);
  promise.then((res) => {
    const data = res.data.data.Book;
    setNotes(data);
    // console.log(data);
  });

  }, []);

 
  return (
    <>
      {notes.slice(0, 3).map((item, index) => {
        return (
          <Card key={index} head={item.booktitle} bold={item.bookname} link={item.bookBody}/>
        );
      })}
    </>
  );
};

export default VisCards;

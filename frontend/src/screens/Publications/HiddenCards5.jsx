// miscellaneous

import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { BACKEND_API } from "../../constant";

const HiddenCards = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const url = `${BACKEND_API}/miscellaneous`;
    const promise = axios.get(url);
    promise.then((res) => {
      const data = res.data.data.Misc;
      setNotes(data);
      // console.log(data);
    });
  }, []);

 
  return (
    <>
      {notes.length > 3 && notes.slice(3, notes.length).map((item, index) => {
        return (
            <Card key={index} head={item.miscellaneousPostertitle} bold={item.miscelaneousPostername} link={item.miscellaneousPoterBody}/>
        );
      })}
    </>
  );
};

export default HiddenCards;

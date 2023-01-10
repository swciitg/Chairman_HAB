import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { BACKEND_API } from "../../constant";

const VisCards = () => {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    const url = `${BACKEND_API}/invitedTalks`;
  const promise = axios.get(url);
  promise.then((res) => {
    const data = res.data.data.InvitedTalk;
    setNotes(data);
    // console.log(data);
  });
  }, []);

 

  return (
    <>
      {notes.slice(0, 3).map((item, index) => {
        return (
          <Card key={index} head={item.invitedTalktitle} bold={item.invitedTalkname} link={item.invitedTalkBody}/>
        );
      })}
    </>
  );
};

export default VisCards;

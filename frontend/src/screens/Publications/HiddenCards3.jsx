import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { BACKEND_API } from "../../constant";

const HiddenCards = () => {
  const [notes, setNotes] = useState([]);
  const url = `${BACKEND_API}/invitedTalks`;
  const promise = axios.get(url);
  promise.then((res) => {
    const data = res.data.data.InvitedTalk;
    setNotes(data);
    // console.log(data);
  });
  return (
    <>
      {notes.slice(3, notes.length).map((item, index) => {
        return (
            <Card key={index} head={item.invitedTalktitle} bold={item.invitedTalkname} />
        );
      })}
    </>
  );
};

export default HiddenCards;

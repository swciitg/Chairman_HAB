import Card from "./Card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_API } from "../../constant";
const Cards = () => {
  const [notes, setNotes] = useState([]);
 
  useEffect(() => {
    const url = `${BACKEND_API}/experimentalFacilities`;
  const promise = axios.get(url);
  promise.then((res) => {
    const data = res.data.data.ExperimentalFacilitiesData;
    setNotes(data);
    //  console.log(data);
  });

  }, []);
    return (
    <div className="hidden mt-16 md:grid md:grid-cols-3 md:gap-24 md:mb-24">
      {notes.slice(0, 3).map((item, index) => {
        return (
          <Card key={index} head={item.experimentalFacilitiesTitle} image={item.experimentalFacilitiesImage} type="exp"/>
        );
      })}
    </div>
  );
};

export default Cards;

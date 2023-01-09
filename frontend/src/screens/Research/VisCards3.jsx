import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_API } from "../../constant";
import Card from "./Card";

const Cards = () => {
  const [notes, setNotes] = useState([]);
 
  useEffect(() => {
    const url = `${BACKEND_API}/simulationSoftwares`;
  const promise = axios.get(url);
  promise.then((res) => {
    const data = res.data.data.simulationSoftwaresData;
    setNotes(data);
    //  console.log(data);
  });

  }, []);
   return (
    <div className="hidden mt-16 md:grid md:grid-cols-3 md:gap-24 md:mb-24">
      {notes.slice(0, 3).map((item, index) => {
        return (
          <Card key={index} head={item.simulationSoftwaresTitle} image={item.imagePath} type="sim" />
        );
      })}
    </div>
  );
};

export default Cards;

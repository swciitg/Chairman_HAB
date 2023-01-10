import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_API } from "../../constant";import Card from "./Card";

export default () => {
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
    <div className="hidden mb-24 md:grid md:grid-cols-3 md:gap-24">
    {notes.length > 3 && notes.slice(3).map((item, index) => {
        return (
          <Card key={index} head={item.simulationSoftwaresTitle} image={item.imagePath} type="sim" />
        );
      })}
    </div>
  );
};

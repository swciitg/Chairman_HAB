import React from "react";
import Container from "./Container.png";

const Card = (props) => {
  return (
    <div className="bg-white p-4">
      {/* <img src={Container} alt="some img" className="w-full mb-4" /> */}
      <h2 className="font-bold mb-2 text-xl">{props.head}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;

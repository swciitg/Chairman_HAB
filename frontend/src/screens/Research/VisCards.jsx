import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="hidden md:grid md:grid-cols-3 md:gap-24 md:mb-24">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;

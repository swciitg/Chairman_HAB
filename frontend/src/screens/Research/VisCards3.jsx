import React from "react";
import Card from "./Card";

const Cards = () => {
   return (
    <div className="hidden mt-16 md:grid md:grid-cols-3 md:gap-24 md:mb-24">
      <Card head="Tetrahert Spectroscopy" />
      <Card head="Tetrahert Spectroscopy" />
      <Card head="Tetrahert Spectroscopy" />
    </div>
  );
};

export default Cards;

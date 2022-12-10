import React from "react";
import Card from "./Card";

export default () => {
  const str =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac enim sit amet nunc iaculis placerat ac in ligula. Vestibulum ante ipsum primis in faucibus";

  return (
    <div className="hidden mb-24 md:grid md:grid-cols-3 md:gap-24">
      <Card head="Tetrahert Spectroscopy" content={str} />
      <Card head="Tetrahert Spectroscopy" content={str} />
      <Card head="Tetrahert Spectroscopy" content={str} />
      <Card head="Tetrahert Spectroscopy" content={str} />
    </div>
  );
};

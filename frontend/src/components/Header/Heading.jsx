import React from "react";

function heading(props) {
  return (
    <div className="flex flex-row justify-between w-full">
      <h1 className="text-lg">{props.name} </h1>
    </div>
  );
}

export default heading;

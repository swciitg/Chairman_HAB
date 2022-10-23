import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function heading(props) {
  return (
    <div className="flex flex-row justify-between w-full">
      <h1>{props.name} </h1>
      <GiHamburgerMenu className="md:hidden text-xl self-center mr-4" />
    </div>
  );
}

export default heading;

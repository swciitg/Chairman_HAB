import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

export default (props) => {
  return (
    <div className="bg-white rounded-xl p-4 my-4 border-2 flex flex-row">
      <p>
        {props.head} <span className="font-bold">{props.bold}</span>
      </p>
      <BsFillArrowRightSquareFill className="text-2xl flex-end ml-10" />
    </div>
  );
};

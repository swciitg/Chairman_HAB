import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

export default (props) => {
  return (
    <div className="bg-white rounded-xl p-4 my-6 border-2 flex flex-row justify-between">
      <p>
        {props.head} <span className="font-bold">{props.bold}</span>
      </p>
      <BsFillArrowRightSquareFill onClick={()=>{document.location.href=props.link}} className="text-2xl ml-10" />
    </div>
  );
};
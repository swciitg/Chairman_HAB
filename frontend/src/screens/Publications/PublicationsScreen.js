import React, { useState } from "react";
import Heading from "./Heading";
import HiddenCards from "./HiddenCards";
import VisCards from "./VisCards";

const PublicationsScreen = () => {
  const [state, setState] = useState(0);
  const [string, setString] = useState("LOAD ALL v");

  const togglebtn = () => {
    if (state === 0) {
      setState(1);
      setString("LOAD LESS ^");
    } else {
      setState(0);
      setString(() => {
        return "LOAD ALL v";
      });
    }
  };

  return (
    <div className="md:mx-24 mx-5 my-16">
      Publications
      <Heading name="hello" />
      <VisCards />
      {state ? <HiddenCards /> : null}
      <input
        type="button"
        value={string}
        onClick={togglebtn}
        className="rounded bg-white border-2 px-4 py-1 text-xs"
      />
    </div>
  );
};

export default PublicationsScreen;

import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";

function Header() {
  return (

    <div>
    <Head />
    <div className="hidden md:block">

    <Navbar/>
    </div>
  </div>
  );
}

export default Header;
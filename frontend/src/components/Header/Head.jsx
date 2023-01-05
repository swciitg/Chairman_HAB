import React,  { useState } from "react";
import Heading from "./Heading";
import logo from "./logo.svg"
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import { GiHamburgerMenu } from "react-icons/gi";

const Head = () => {
  const [hidden, setHidden] = useState("hidden");

  const handleClick = () => {
    if (hidden == "") setHidden("hidden");
    else setHidden("");
  }
  return (
    <div>
    <div className={styles.head}>
      <img src={logo} alt="iitg logo" />
      <Heading name="TERAHERTZ PHOTONICS AND PLASMONICS LABORATORY" />
      <button onClick={handleClick}>
      <GiHamburgerMenu className="md:hidden text-xl self-center mr-4" />
      </button>
    </div>
     <Navbar hidden={hidden}/>
    </div>
  );
}

export default Head;
import React from "react";
import Heading from "./Heading";
import logo from "./logo.svg"
import styles from "./Header.module.css";

function head() {
  return (
    <div className={styles.head}>
      <img src={logo} alt="iitg logo" />
      <Heading name="Terahertz photonics and plasmonics laboratory" />
    </div>
  );
}

export default head;
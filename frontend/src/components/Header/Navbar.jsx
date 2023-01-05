import React from "react";
import Cell from "./Cell";
import styles from "./Header.module.css";

function Navbar({ hidden }) {
  return (
    <div className={hidden}>
      <nav
        className={`flex flex-col md:flex-row md:space-x-8 w-full md:w-auto md:order-1 md:pl-24 ${styles.navbar}`}
      >
        <Cell name="Home" />
        <Cell name="Research" />
        <Cell name="Projects" />
        <Cell name="Publications" />
        <Cell name="Members" />
      </nav>
    </div>
  );
}

export default Navbar;

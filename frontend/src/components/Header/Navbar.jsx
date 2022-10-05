import React from "react";
import Cell from "./Cell";
import styles from "./Header.module.css";

function navbar(){
    return <div className={styles.navbar}  >
        <ul>
            <Cell name="Home" />
            <Cell name="Research" />
            <Cell name="Projects" />
            <Cell name="Publications" />
            <Cell name="Members" />
        </ul>
    </div>
}

export default navbar;
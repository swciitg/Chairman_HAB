import React from "react";
import Cell from "./Cell";

function navbar(){
    return <div className="navbar">
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
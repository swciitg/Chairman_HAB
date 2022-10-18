import React, { useState } from "react";
import Cell from "./Cell";
import styles from "./Header.module.css";

function navbar(){
    const [active1, setActive1] = useState(0);
    const [active2, setActive2] = useState(0);
    const [active3, setActive3] = useState(0);
    const [active4, setActive4] = useState(0);
    const [active5, setActive5] = useState(0);

    function handleClick1() {
        setActive1(1);
        setActive2(0);
        setActive3(0);
        setActive4(0);
        setActive5(0);
    }

    function handleClick2() {
        setActive1(0);
        setActive2(1);
        setActive3(0);
        setActive4(0);
        setActive5(0);
    }

    function handleClick3() {
        setActive1(0);
        setActive2(0);
        setActive3(1);
        setActive4(0);
        setActive5(0);
    }

    function handleClick4() {
        setActive1(0);
        setActive2(0);
        setActive3(0);
        setActive4(1);
        setActive5(0);
    }

    function handleClick5() {
        setActive1(0);
        setActive2(0);
        setActive3(0);
        setActive4(0);
        setActive5(1);
    }

    return <div className={styles.navbar}  >
        
            <Cell onClick={handleClick1} active={active1} name="Home" />
            <Cell onClick={handleClick2} active={active2} name="Research" />
            <Cell onClick={handleClick3} active={active3} name="Projects" />
            <Cell onClick={handleClick4} active={active4} name="Publications" />
            <Cell onClick={handleClick5} active={active5} name="Members" />
        
    </div>
}

export default navbar;
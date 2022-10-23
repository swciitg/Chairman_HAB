import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";


function Cell(props) {
  const name = props.name;
  const url = name.toLowerCase();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
    {console.log(url)}
    {
    url === "home" ? 
    <Link onClick={() => setOpen(!isOpen)} className={`${styles.link} ${isOpen && "font-bold"}`} to={`/`}> {props.name} </Link> :     
    <Link onClick={() => setOpen(!isOpen)} className={`${styles.link} ${isOpen && "font-bold"}`} to={`/${url}`}> {props.name} </Link>    
    }  
    
    </>
  ); 
  // return <li id="field">{props.name}</li>;
}

export default Cell;
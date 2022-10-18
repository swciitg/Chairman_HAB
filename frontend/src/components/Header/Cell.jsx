import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";


function cell(props) {
  const name = props.name;
  const url = name.toLowerCase();
  console.log(name.toLowerCase());
  // name = name.toLowerCase();
  return (
      
    <>
    {
    url == "home" ? 
    <Link className={`${styles.link} ${props.active ? "color-black" : "" }`} to={`/`}> {props.name} </Link> :     
    <Link className={`${styles.link}`} to={`/${url}`}> {props.name} </Link>
    }  
    </>
  ); 
  // return <li id="field">{props.name}</li>;
}

export default cell;
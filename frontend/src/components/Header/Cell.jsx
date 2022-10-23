import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Header.module.css";

function Cell(props) {
  const name = props.name;
  const url = name.toLowerCase();
  const activeStyle = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
    }
  }

  return (
    <NavLink to={url} style={activeStyle}  className={`inline md:block py-2 pr-4 pl-3 text-white md:p-0 ${styles.link}`}>{name}</NavLink> 
    ); 
}

export default Cell;
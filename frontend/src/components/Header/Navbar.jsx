import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Navbar() {
  const [isOpen1, setOpen1] = useState(true);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [isOpen5, setOpen5] = useState(false);

  return (
    <div className={`md:w-full md:w-auto md:order-1 ${styles.navbar}`}>
      {/* <Cell name="Home" />
      <Cell name="Research" />
      <Cell name="Projects" />
      <Cell name="Publications" />
      <Cell name="Members" /> */}

      <div className="flex flex-col md:p-0 md:flex-row md:space-x-8">
        <Link
          onClick={() => {
            setOpen1(true);
            setOpen2(false);
            setOpen3(false);
            setOpen4(false);
            setOpen5(false);
          }}
          className={`py-2 pr-4 pl-3 text-white rounded md:p-0 ${styles.link} ${
            isOpen1 && "font-bold"
          }`}
          to={`/`}
        >
          Home
        </Link>
        <Link
          onClick={() => {
            setOpen1(false);
            setOpen2(true);
            setOpen3(false);
            setOpen4(false);
            setOpen5(false);
          }}
          className={`block py-2 pr-4 pl-3 text-white rounded md:p-0 ${
            styles.link
          } ${isOpen2 && "font-bold"}`}
          to={`/research`}
        >
          Research
        </Link>
        <Link
          onClick={() => {
            setOpen1(false);
            setOpen2(false);
            setOpen3(true);
            setOpen4(false);
            setOpen5(false);
          }}
          className={`block py-2 pr-4 pl-3 text-white rounded md:p-0 ${
            styles.link
          } ${isOpen3 && "font-bold"}`}
          to={`/projects`}
        >
          Projects
        </Link>
        <Link
          onClick={() => {
            setOpen1(false);
            setOpen2(false);
            setOpen3(false);
            setOpen4(true);
            setOpen5(false);
          }}
          className={`block py-2 pr-4 pl-3 text-white rounded md:p-0 ${
            styles.link
          } ${isOpen4 && "font-bold"}`}
          to={`/publications`}
        >
          Publications
        </Link>
        <Link
          onClick={() => {
            setOpen1(false);
            setOpen2(false);
            setOpen3(false);
            setOpen4(false);
            setOpen5(true);
          }}
          className={`block py-2 pr-4 pl-3 text-white rounded md:p-0 ${
            styles.link
          } ${isOpen5 && "font-bold"}`}
          to={`/members`}
        >
          Members
        </Link>
      </div>
    </div>
  );

  return (
    <ul>
      <li>hello</li>
      <li>hi</li>
      <li>love you</li>
      <li>you there</li>
      <li>deer</li>
    </ul>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { BASEURL } from "../../../constant"
import { SideNavList } from "./constants";

const Sidebar = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);
  const linkSidebar =
    "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item";
  const linkDropdown =
    "flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item";

  const authBtn = (
    <a href={`${BASEURL}/login`} className={linkDropdown}>
      Login
    </a>
  );
  return (
    <>
      <aside
        className={`relative ${styles.bgsidebar} w-64 hidden sm:block shadow-xl`}
      >
        <div className="p-6">
          <Link
            to={`/admin`}
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            ADMIN
          </Link>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          {SideNavList.map((data) => {
            return (
              <Link to={`/admin/${data.url}`} className={linkSidebar}>
                {data.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="relative w-full flex flex-col overflow-y-hidden">
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
          <div className="w-1/2"></div>
          <div className="relative w-1/2 flex justify-end"></div>
        </header>

        <header className={`w-full ${styles.bgsidebar} py-5 px-6 sm:hidden`}>
          <div className="flex items-center justify-between">
            <Link
              to={`/admin`}
              className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
            >
              Admin
            </Link>
            <button
              onClick={() => setHamburger(!hamburger)}
              className="text-white text-3xl focus:outline-none"
            >
              {hamburger ? "X" : "O"}
            </button>
          </div>

          <nav
            className={
              hamburger ? "flex flex-col pt-4" : "hidden flex-col pt-4"
            }
          >
            <>
              {SideNavList.map((data) => {
                return (
                  <Link to={`/admin/${data.url}`} className={linkDropdown}>
                    {data.name}
                  </Link>
                );
              })}
            </>
            {authBtn}
          </nav>
        </header>
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
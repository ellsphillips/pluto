import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";
import logo from "../img/logo.svg";

function Sidebar({ sidebarOpen, setSidebarOpen }: any) {
  const trigger: any = useRef(null);
  const sidebar: any = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="sidebar">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`sidebar--backdrop ${
          sidebarOpen ? "sidebar--backdrop__open" : "sidebar--backdrop__close"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`sidebar--menu ${
          sidebarOpen ? "sidebar--menu__open" : "sidebar--menu__close"
        }`}
      >
        {/* Sidebar header */}
        <div className="sidebar--menu__header">
          {/* Close button */}
          <button
            ref={trigger}
            className="close-button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="for-screen-readers-only">Close sidebar</span>
            <svg
              className="arrow"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}

          <img style={{ height: "2rem" }} alt="" aria-hidden src={logo} />
        </div>

        {/* Links */}
        <div className="sidebar--menu__links">
          <h3 className="title">Pages</h3>
          <ul className="list">
            {/* Dashboard */}
            <li className={"list__item"}>
              <NavLink to="/" className={"link"}>
                <div className="icon">
                  <svg viewBox="0 0 24 24">
                    <path
                      className={"fill-light"}
                      d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                    />
                    <path
                      className={"fill-dark"}
                      d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                    />
                    <path
                      className={"fill-light"}
                      d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                    />
                  </svg>
                  <span className="text">Dashboard</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isActive, setActive] = useState(true);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navigation">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fillRule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>

      <div
        className={`navigation__container ${
          isActive ? "" : "container-active"
        }`}
      >
        <ul className="navigation__container--list">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <span>00</span>Home
            </li>
          </NavLink>
          <NavLink
            to="/destination"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <span>01</span>Destination
            </li>
          </NavLink>
          <NavLink
            to="/crew"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <span>02</span>Crew
            </li>
          </NavLink>
          <NavLink
            to="/technology"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <span>03</span>Technology
            </li>
          </NavLink>
        </ul>
      </div>

      <div
        className={`hamburger-container ${
          isActive ? "hamburger-rest" : "hamburger-active"
        }`}
        onClick={handleToggle}
      ></div>
    </nav>
  );
};

export default Navigation;

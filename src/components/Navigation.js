import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <ul className="navigation__list">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="navigation__list--home">
            <span>00</span>Home
          </li>
        </NavLink>
        <NavLink
          to="/destination"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="navigation__list--destination">
            <span>01</span>Destination
          </li>
        </NavLink>
        <NavLink
          to="/crew"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="navigation__list--crew">
            <span>02</span>Crew
          </li>
        </NavLink>
        <NavLink
          to="/technology"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="navigation__list--technology">
            <span>03</span>Technology
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;

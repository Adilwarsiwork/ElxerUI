import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header-box">
      <div className="header-top">
        <div className="header-top-left">
          Customer Support:{" "}
          <a href="tel:0771-677-7777">0771-677-7777 &#40;24/7&#41; | </a> Email:{" "}
          <a href="mailto:support@elxer.com">support@elxer.com</a>
        </div>

        <div className="header-top-right">
          <span
            onClick={() => {
              navigate("/career");
            }}
          >
            We're Hiring
          </span>
          <span
            onClick={() => {
              navigate("/custumer");
            }}
          >
            Customer portal
          </span>
        </div>
      </div>
      <div className="header-bottom">
        <div className="logo">
          <span
            onClick={() => {
              navigate("/");
            }}
          >
            Elxer
          </span>
        </div>
        <div>
          <ul className="navMenu">
            <li className="menuItem">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="menuItem">
              <NavLink to={"/corporate"}>Business</NavLink>{" "}
            </li>
            <li className="menuItem">
              <NavLink to="/packages">Plans</NavLink>
            </li>
            <li className="menuItem">
              <NavLink to={"/support"}>Support</NavLink>
            </li>
            <li className="menuItem">
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </li>
            <li className=" butttons">
              <NavLink to={"/pay-recharge"}>Pay & Recharge</NavLink>
            </li>
            <li className=" butttons">
              <NavLink to={"/new-connection"}>New Connection </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

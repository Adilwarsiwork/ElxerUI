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
          <nav className="navMenu">
            <NavLink to={"/"} className="menuItem">
              Home
            </NavLink>
            <NavLink to={"/corporate"} className="menuItem">
              Business
            </NavLink>{" "}
            <NavLink to={"/packages"} className="menuItem">
              Plans
            </NavLink>
            <NavLink to={"/support"} className="menuItem">
              Support
            </NavLink>
            <NavLink to={"/contact"} className="menuItem">
              Contact Us
            </NavLink>
            <span
              className="butttons"
              onClick={() => {
                navigate("/pay-recharge");
              }}
            >
              Pay & Recharge
            </span>
            <span
              className="butttons"
              onClick={() => {
                navigate("/new-connection");
              }}
            >
              New Connection
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

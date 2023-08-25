import React from "react";
import "./Page.css";
import { useNavigate } from "react-router-dom";

const Page = (props) => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/packages");
  };
  return (
    <div className="page-box">
      <h1>{props.val}&nbsp;Page</h1>
      <h3>Underdevelopment</h3>
      <h3>
        Click Here to go to
        <span style={{ textDecoration: "underline" }} onClick={handleRoute}>
          PLANS
        </span>{" "}
        page{" "}
      </h3>
    </div>
  );
};

export default Page;

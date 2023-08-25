import React from "react";
import { GoCircle } from "react-icons/go";
import { TbCurrencyRupee } from "react-icons/tb";
import "./PlanCard.css";

const PlanCard = (props) => {
  // console.log(props.plandata);
  return (
    <div className="plan-cards">
      <GoCircle className="go-circle"></GoCircle>
      <span className="plan-catagory">{props.plandata.name} </span>
      <span className="bandwidth">{props.plandata.speed}</span>
      <span className="plan-price">
        <TbCurrencyRupee className="rupee-symbol"></TbCurrencyRupee>
        {props.plandata.price}/<span>MONTH</span>
      </span>
      {props.plandata.Discount ? (
        <span className="plan-discount">
          <TbCurrencyRupee className="rupee-symbol"></TbCurrencyRupee>
          <del>{props.plandata.Realprice}</del>{" "}
          <span>{props.plandata.Discount}</span>
        </span>
      ) : (
        ""
      )}
      <span className="plan-duration">{props.plandata.month}</span>
      <span className="data-limit">{props.plandata.data}</span>
      {props.plandata.isott ? (
        <span className="ott-details">{props.plandata.isott}</span>
      ) : (
        ""
      )}
      {props.plandata.isott ? <span className="ott-label">OTT Plan</span> : ""}
    </div>
  );
};

export default PlanCard;

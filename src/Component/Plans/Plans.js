import React from "react";
import { useState, useEffect, useRef } from "react";
import Select from "react-select";
import "./Plans.css";
import axios from "axios";
import { LiaCircle } from "react-icons/lia";

import PlanCard from "../PlanCards/PlanCard";
import { filter, plans } from "../../db.js";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const [city, setCity] = useState([
    {
      city: {
        city: "Raipur",
        connection: {
          selected: 0,
          connections: ["Residential", "Commercial"],
        },
        month: {
          selected: "1",
          months: {
            1: "1 Month",
            3: "3 Months",
            6: "6 Months",
            12: "12 Months",
          },
        },
      },
    },
  ]);
  const [plan, setPlan] = useState(plans[2].residentioal.month1);

  const [filterdetails, setFilterdetails] = useState({
    city: "Hyderabad",
    connectiontype: "RESIDENTIOAL",
    month: "month1",
  });

  // console.log(plan.length);

  useEffect(() => {
    let y = plans.filter((val) => {
      return city[0].city.city === val.city;
    });
    setPlan(y[0].residentioal.month1);
  }, [city]);

  const residential = useRef();
  const commercial = useRef();
  const month1 = useRef();
  const month3 = useRef();
  const month6 = useRef();
  const month12 = useRef();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  useEffect(() => {
    axios
      .get(
        "https://elxer.com/packages?action=filters&city=Raipur&connection=0&month=1"
      )
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const options = [
    { value: "Bengaluru", label: "Bengaluru" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Raipur", label: "Raipur" },
    { value: "Durg", label: "Durg" },
    { value: "Bhilai", label: "Bhilai" },
    { value: "Pali", label: "Pali" },
    { value: "Jashpur", label: "Jashpur" },
    { value: "Kawardha", label: "Kawardha" },
    { value: "Bhatapara", label: "Bhatapara" },
    { value: "Amlai", label: "Amlai" },
    { value: "Kanker", label: "kanker" },
    { value: "Sakti", label: "Sakti" },
    { value: "Rajnandgaon", label: "Rajnandgaon" },
    { value: "Kotma", label: "Kotma" },
    { value: "Sehore", label: "Sehore" },
    { value: "Korba", label: "Korba" },
    { value: "Janjgir", label: "Janjgir" },
    { value: "Hatta", label: "Hatta" },
  ];

  const styles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#0077db",
      borderColor: "#fff",
      width: "12rem",
      "&:hover": {
        borderColor: state.isFocused
          ? "2px solid #db0303"
          : "#2px solid #db0303",
      },
      "&:focus": {
        borderColor: state.isFocused
          ? "#2px solid #db0303"
          : "#2px solid #db0303",
      },
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "#fff",
      fontSize: "22px",
      fontWeight: "600",
      letterSpacing: "0.8px",
    }),
    indicatorContainer: (provided, state) => ({
      ...provided,
      color: "#fff",
      fontSize: "20px",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      width: "2px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "#fff",
      fontSize: "22px",
      fontWeight: "550",
      letterSpacing: "0.7px",
    }),
    option: (provided, state) => ({
      ...provided,
      color: "#0077db",
      backgroundColor: "#fff",
      backgroundColor: state.isSelected ? "#d0d5dc" : "#fff",
      borderBottom: "2px",
      fontSize: "18px",
      height: "100%",
      letterSpacing: "0.8px",
      fontWeight: "530",
    }),
  };

  // console.log(city[0].city.connection.connections.length);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1440, min: 1080 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1080, min: 640 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tabletmid: {
      breakpoint: { max: 640, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const handleFilterChange = (e) => {
    console.log(e);
    let x = filter.filter((val, index) => {
      return val.city.city === e.value;
    });
    setCity(x);

    setFilterdetails((prevalues) => {
      return {
        ...prevalues,
        connectiontype: "RESIDENTIOAL",
        city: e.value,
      };
    });

    residential.current.className = "active-connection-type";
    if (!(city[0].city.city === "Kanker")) {
      month3.current.className = "";
      month6.current.className = "";
      month12.current.className = "";
      month1.current.className = "active-duration-type";
    }
    setPlan(plans[2]?.residentioal.month1);
  };

  const setplandetail = () => {
    let y = plans.filter((val) => {
      return city[0].city.city === val.city;
    });
    setPlan(y[0].residentioal.month1);
  };

  const handlClickOne_conditionFirst = (e) => {
    if (e.target.innerText === "RESIDENTIOAL") {
      console.log(city);
      residential.current.className = "active-connection-type";
      console.log(filterdetails);
    }
  };

  const handlClickOne = (e) => {
    if (e.target.innerText === "RESIDENTIOAL") {
      commercial.current.className = "";
      residential.current.className = "active-connection-type";
      month3.current.className = "";
      month6.current.className = "";
      month12.current.className = "";
      month1.current.className = "active-duration-type";
      setPlan(plans[2]?.residentioal.month1);
      setFilterdetails((prevalues) => {
        return {
          ...prevalues,
          connectiontype: "RESIDENTIOAL",
        };
      });
    } else {
      residential.current.className = "";
      commercial.current.className = "active-connection-type";
      month3.current.className = "";
      month6.current.className = "";
      month12.current.className = "";
      month1.current.className = "active-duration-type";
      setPlan(plans[2]?.commercial.month1);
      setFilterdetails((prevalues) => {
        return {
          ...prevalues,
          connectiontype: "COMMERCIAL",
        };
      });
    }
  };
  const handlClickTwo = (e) => {
    if (e.target.innerText === "1 MONTH") {
      if (filterdetails.connectiontype === "RESIDENTIOAL") {
        month3.current.className = "";
        month6.current.className = "";
        month12.current.className = "";
        month1.current.className = "active-duration-type";
        let x = plans.filter((val) => {
          return city[0].city.city === val.city;
        });
        setPlan(x[0].residentioal.month1);
      } else {
        month3.current.className = "";
        month6.current.className = "";
        month12.current.className = "";
        month1.current.className = "active-duration-type";
        let x = plans.filter((val) => {
          return city[0].city.city === val.city;
        });
        setPlan(x[0].commercial.month1);
      }
    } else if (e.target.innerText === "3 MONTH") {
      if (filterdetails.connectiontype === "RESIDENTIOAL") {
        month1.current.className = "";
        month6.current.className = "";
        month12.current.className = "";
        month3.current.className = "active-duration-type";
        let x = plans.filter((val) => {
          return city[0].city.city === val.city;
        });
        setPlan(x[0].residentioal.month3);
        console.log(filterdetails);
      } else {
        month1.current.className = "";
        month6.current.className = "";
        month12.current.className = "";
        month3.current.className = "active-duration-type";
        let x = plans.filter((val) => {
          return city[0].city.city === val.city;
        });
        setPlan(x[0].commercial.month3);
        console.log(x[0].commercial.month3);
        console.log(filterdetails);
      }
    } else if (e.target.innerText === "6 MONTH") {
      if (filterdetails.connectiontype === "RESIDENTIOAL") {
        month1.current.className = "";
        month3.current.className = "";
        month12.current.className = "";
        month6.current.className = "active-duration-type";
        let x = plans.filter((val) => {
          return city[0].city.city === val.city;
        });
        setPlan(x[0].residentioal.month6);
      } else {
        month1.current.className = "";
        month3.current.className = "";
        month12.current.className = "";
        month6.current.className = "active-duration-type";
        let x = plans.filter((val) => {
          return city[0].city.city === val.city;
        });
        setPlan(x[0].commercial.month6);
      }
    } else {
      if (filterdetails.connectiontype === "RESIDENTIOAL") {
        month1.current.className = "";
        month3.current.className = "";
        month6.current.className = "";
        month12.current.className = "active-duration-type";
        let x = plans.filter((val) => {
          return city[0].city.city === val.city;
        });
        setPlan(x[0].residentioal.month12);
      } else {
        month1.current.className = "";
        month3.current.className = "";
        month6.current.className = "";
        month12.current.className = "active-duration-type";
        let x = plans.filter((val) => {
          return city[0].city.city === val.city;
        });
        setPlan(x[0].commercial.month12);
      }
    }
  };
  return (
    <div className="plan-main-box">
      <div className="plan-upper-banner">
        Broadband Plans For {city[0].city.city}
      </div>
      <div className="plan-middle-banner-one">
        <span
          style={{
            marginRight: "12px",
            textAlign: "center",
            paddingLeft: "5px",
          }}
        >
          All new Truly Unlimited Fiber Broadband plans for
        </span>
        <Select
          options={options}
          styles={styles}
          placeholder={"Raipur"}
          onChange={handleFilterChange}
        />
      </div>
      <div className="plan-middle-banner-two">
        <p>
          With Internet speeds up to 500 Mbps - there's a speed that's perfect
          for every budget and every digital lifestyle.
        </p>
      </div>
      <div className="plan-middle-banner-filter">
        <div className="plan-middle-banner-connectiontype">
          {city[0].city.connection.connections.length === 1 ? (
            <span
              className="active-connection-type"
              ref={residential}
              onClick={handlClickOne_conditionFirst}
            >
              RESIDENTIOAL
            </span>
          ) : (
            <div className="plan-middle-banner-connectiontype">
              <span
                className="active-connection-type"
                ref={residential}
                onClick={handlClickOne}
              >
                RESIDENTIOAL
              </span>
              <span ref={commercial} onClick={handlClickOne}>
                COMMERCIAL
              </span>
            </div>
          )}
        </div>
        <div className="plan-middle-banner-planduration">
          {city[0].city.month === undefined ? (
            ""
          ) : (
            <div className="plan-middle-banner-planduration">
              <span
                className="active-duration-type"
                ref={month1}
                onClick={handlClickTwo}
              >
                1 MONTH
              </span>
              <span ref={month3} onClick={handlClickTwo}>
                3 MONTH
              </span>
              <span ref={month6} onClick={handlClickTwo}>
                6 MONTH
              </span>
              <span ref={month12} onClick={handlClickTwo}>
                12 MONTH
              </span>
            </div>
          )}
        </div>
      </div>

      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        customTransition="all 0.7s"
        transitionDuration={800}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "all"]}
        deviceType={"all"}
        rewind={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="plan-box"
      >
        {plan?.map((value, index) => {
          return <PlanCard key={index} plandata={value}></PlanCard>;
        })}
      </Carousel>

      <div className="entertainment-details">
        <p style={{ textAlign: "center" }}>
          Get <strong> &nbsp;Free INTERNET</strong>&nbsp; on&nbsp;
          <strong>ENTERTAINMENT</strong>&nbsp; /&nbsp;
          <strong>ENTERTAINMENT</strong>
          &nbsp;+ /<strong>&nbsp;BONANZA</strong>&nbsp;
        </p>
        <p style={{ textAlign: "center" }}>
          plans for 15 days on half-yearly recharge and 30 days on Annual
          recharge!
        </p>
      </div>
      <div className="broadband-description">
        <h3 className="heading">Broadband Connection in {city[0].city.city}</h3>
        <p className="description-one">
          Get the best of internet plans in {city[0].city.city} and experience
          ultra-fast speeds with fiber optic technology.
        </p>
        <p className="description-two">
          With our Unlimited broadband plans & data, you can enjoy unlimited
          movies, music and much more. Advance broadband technology allows you
          to enjoy high-speed internet at up to 300 Mbps which gives you faster
          downloads and no-buffering experience.
        </p>
      </div>
      <div className="terms-conditions">
        <h5 className="tncheadding">Terms & Conditions</h5>
        <div className="tnc-points">
          <LiaCircle className="liacircle"></LiaCircle>
          <p>
            10%, 15%, 20% Discount applicable as Quarterly, Half yearly and
            Annual plans respectively
          </p>
        </div>
        <div className="tnc-points">
          <LiaCircle className="liacircle"></LiaCircle>
          <p>
            10%, 15%, 20% Discount applicable as Quarterly, Half yearly and
            Annual plans respectively
          </p>
        </div>
        <div className="tnc-points">
          <LiaCircle className="liacircle"></LiaCircle>
          <p>
            Installation will be done within 3-7 days from the date of
            realisation of payment
          </p>
        </div>
        <div className="tnc-points">
          <LiaCircle className="liacircle"></LiaCircle>
          <p>Month refers to a period of 30 days</p>
        </div>
        <div className="tnc-points">
          <LiaCircle className="liacircle"></LiaCircle>
          <p>
            OTT recharge is non-refundable, Apps are subject to change, and
            rental plans may vary across different platforms
          </p>
        </div>
        <div className="tnc-points">
          <LiaCircle className="liacircle"></LiaCircle>
          <p>
            200 Mbps & above plans are available in selected cities and are
            subjected to technical feasibility
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

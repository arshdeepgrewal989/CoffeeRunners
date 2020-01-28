import React, { Component } from "react";

import CEOImage from "../images/ceo.jpg";
import CTOImage from "../images/cto.png";

const Jumbotron = () => {
  return (
    <div className="jumbotron" style={{ borderRadius: "24px" }}>
      <h1 style={{ color: "#784421ff" }}>About Us</h1>
      <p className="lead mt-4">
        Taking coffee breaks has become increasing difficult for a variety of
        reasons
        <hr className="my-4" />
        Whether it be due to the heightened workload or the rush at coffee
        shops, it's certain that these breaks are well-needed
      </p>
      <a
        className="btn btn-outline-secondary mt-4"
        style={{
          color: "#784421ff",
          borderRadius: "12px",
          borderColor: "#784421ff"
        }}
        href="https://www.forbes.com/sites/alankohll/2018/05/29/new-study-shows-correlation-between-employee-engagement-and-the-long-lost-lunch-break/#1dd8a8824efc"
        target="_blank"
      >
        Find out why
      </a>
    </div>
  );
};

const WhyUs = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-start flex-wrap"
      style={{ marginBottom: "72px", marginTop: "72px" }}
    >
      <h1 style={{ color: "#784421ff" }}>Why Us</h1>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          On-time delivery—so your coffee does not get cold!
        </li>
        <li className="list-group-item">
          Low delivery rates—we are hard to resist!
        </li>
        <li className="list-group-item">
          Free delivery to specified hotspot cafés
        </li>
        <li className="list-group-item">
          Booking in advance, available for bulk orders
        </li>
        <li className="list-group-item">
          Affordable packages and deals for regular customers or business owners
        </li>
        <li className="list-group-item">Time-saving and convenient</li>
        <li className="list-group-item">Always available</li>
        <li className="list-group-item">
          Delivers to and from any location of your choice
        </li>
        <li className="list-group-item">
          High quality and customer-friendly service
        </li>
      </ul>
    </div>
  );
};

const Team = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-start flex-wrap mt-4">
      <h1 style={{ color: "#784421ff" }}>Our Team</h1>
      <div className="d-flex justify-content-center align-items-start flex-wrap mt-4">
        <img
          src={CEOImage}
          style={{
            objectFit: "cover",
            width: "256px",
            height: "256px",
            borderRadius: "50%",
            boxShadow: "2px 2px 12px lightgray"
          }}
        />
        <div className="d-flex flex-column justify-content-center align-items-start flex-wrap m-4">
          <p className="display-4 text-left" style={{ color: "#784421ff" }}>
            Arshdeep Grewal
          </p>
          <p style={{ color: "lightgray", fontSize: "32px" }}>Founder, CEO</p>
        </div>
      </div>
      <hr />

      <div className="d-flex justify-content-center align-items-start flex-wrap mt-4 align-self-end">
        <div className="d-flex flex-column justify-content-center align-items-end flex-wrap m-4">
          <p className="display-4 text-right" style={{ color: "#784421ff" }}>
            Abhinav Kargupta
          </p>
          <p style={{ color: "lightgray", fontSize: "32px" }}>Founder, CTO</p>
        </div>
        <img
          src={CTOImage}
          style={{
            objectFit: "cover",
            width: "256px",
            height: "256px",
            borderRadius: "50%",
            boxShadow: "2px 2px 12px lightgray"
          }}
        />
      </div>
    </div>
  );
};

class About extends Component {
  render() {
    return (
      <div className="m-4">
        <Jumbotron />
        <WhyUs />
        <Team />
      </div>
    );
  }
}

export default About;

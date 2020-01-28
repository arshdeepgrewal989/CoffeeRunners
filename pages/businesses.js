import React, { Component } from "react";

import ContactForm from "../components/ContactForm";

import OfficeWorker from "../images/office-worker.jpg";
import Calendar from "../images/calendar.png";
import CoffeeMascot from "../images/coffee-mascot.png";

const Jumbotron = () => {
  let [mobileVersion, setMobileVersion] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      setMobileVersion(false);
    } else {
      setMobileVersion(true);
    }
  }, []);

  return (
    <div
      className={`d-flex flex-row ${
        mobileVersion ? "flex-wrap" : ""
      } justify-content-center align-items-center`}
    >
      <img
        src={OfficeWorker}
        style={{
          objectFit: "contain",
          width: mobileVersion ? "100%" : "720px"
        }}
      />
      <p
        className="display-4 lead"
        style={{
          fontSize: mobileVersion ? "32px" : "48px",
          color: "#784421ff",
          fontWeight: 800
        }}
      >
        Does your office need a productivity boost?
      </p>
    </div>
  );
};

const Section1 = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ marginBottom: "72px" }}
    >
      <p
        className={`lead text-center`}
        style={{ color: "darkgray", fontSize: "22px" }}
      >
        Studies show that regular breaks during the work day will increase
        productivity in an office
      </p>
      <a
        className="btn btn-outline-secondary"
        style={{
          borderRadius: "12px"
        }}
        href="https://www.forbes.com/sites/alankohll/2018/05/29/new-study-shows-correlation-between-employee-engagement-and-the-long-lost-lunch-break/#1dd8a8824efc"
        target="_blank"
      >
        Find out why
      </a>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-between flex-wrap mt-4">
      <div className="d-flex flex-row align-items-center flex-wrap">
        <img
          src={Calendar}
          style={{
            width: "256px",
            boxShadow: "2px 2px 12px lightgray",
            borderRadius: "24px"
          }}
        />
        <h1
          className="display-4 lead m-4"
          style={{
            fontSize: "32px",
            color: "#784421ff"
          }}
        >
          <span style={{ fontSize: "16px" }}>Office</span>
          <br />
          Deliveries
          <br />
          <span style={{ fontSize: "16px" }}>and</span>
          <br />
          Scheduling
        </h1>
      </div>
      <p
        className="lead text-right mt-4"
        style={{ fontSize: "22px", width: "480px", color: "darkgray" }}
      >
        Your employees can set up regular delivery times, and we'll deliver it
        to them,{" "}
        <span style={{ color: "dimgray" }}>every time, on time, straight </span>
        to your office
      </p>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-between flex-wrap mt-4">
      <div className="d-flex flex-row align-items-center flex-wrap">
        <img
          src={CoffeeMascot}
          style={{
            width: "256px",
            boxShadow: "2px 2px 12px lightgray",
            borderRadius: "24px",
            padding: "48px",
            backgroundColor: "rgba(166,220,222,1)"
          }}
        />
        <h1
          className="display-4 lead m-4"
          style={{
            fontSize: "32px",
            color: "#784421ff"
          }}
        >
          <span style={{ fontSize: "16px" }}>Employee</span>
          <br />
          Accounts
        </h1>
      </div>

      <p
        className="lead text-right mt-4"
        style={{ fontSize: "22px", width: "480px", color: "darkgray" }}
      >
        Each of your employees will be given a{" "}
        <span style={{ color: "dimgray" }}>business account</span> linked to a
        company account
      </p>
    </div>
  );
};

class BusinessesPage extends Component {
  render() {
    return (
      <div className="m-4">
        <Jumbotron />
        <Section1 />
        <Section2 />
        <Section3 />
        <ContactForm />
      </div>
    );
  }
}

export default BusinessesPage;

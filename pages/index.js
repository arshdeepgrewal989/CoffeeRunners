import React, { Component } from "react";

import CoffeeImage1 from "../images/coffee-image1.png";
import CoffeeImage2 from "../images/coffee-image2.jpg";
import SingularCup1 from "../images/singular-cup1.png";
import SingularCup2 from "../images/singular-cup2.png";
import SingularCup3 from "../images/singular-cup3.png";
import SingularCup4 from "../images/singular-cup4.png";
import Rewards from "../images/rewards.png";
import CoffeeSelection from "../images/coffee-selection.png";

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
      className="d-flex flex-column w-100"
      style={{
        position: "relative",
        marginBottom: "128px"
        // border: "1px solid"
      }}
    >
      <img
        src={CoffeeImage1}
        className={`card-img align-self-${mobileVersion ? "center" : "start"}`}
        style={{
          objectFit: "cover",
          width: "18rem",
          borderRadius: "1rem",
          boxShadow: "-2px 2px 32px lightgray",
          marginBottom: mobileVersion ? "256px" : "-64px"
        }}
      />
      <div
        className="w-100 h-100 d-flex flex-column justify-content-center align-items-center align-self-center"
        style={{
          position: mobileVersion ? "absolute" : "static"
        }}
      >
        <h1
          className="display-4 text-left mb-4"
          style={{
            fontWeight: 1000,
            letterSpacing: 0,
            color: "#784421ff"
          }}
        >
          Your Coffee,
          <br />
          Your Way
        </h1>
        <p
          className="lead text-right"
          style={{
            fontSize: "22px",
            color: "darkgray"
          }}
        >
          customize your coffee
          <br />
          earn points
          <br />
          share with friends
        </p>
      </div>
      <img
        src={CoffeeImage2}
        className={`card-img align-self-${mobileVersion ? "center" : "end"}`}
        style={{
          objectFit: "cover",
          width: "18rem",
          borderRadius: "1rem",
          boxShadow: "-2px 2px 32px gray",
          marginTop: mobileVersion ? "256px" : "-64px"
        }}
      />
    </div>
  );
};

const Section1 = () => {
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
      className="row d-flex align-items-center mt-4"
      style={{
        marginBottom: "128px",
        position: "relative",
        padding: "24px"
      }}
    >
      <h1
        className={`col${mobileVersion ? "" : "-3"} display-4 lead`}
        style={{
          color: "#784421ff",
          fontSize: "36px",
          letterSpacing: 0
        }}
      >
        <span style={{ fontSize: "18px" }}>What's in it</span>
        <br />
        for you
      </h1>
      <div className="col d-flex flex-row flex-wrap mt-4">
        <div className="col d-flex flex-column justify-content-center align-items-center align-self-start">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
              width: "128px",
              height: "256px",
              borderRadius: "64px",
              backgroundColor: "rgba(166,220,222,1)",
              boxShadow: "4px 4px 12px lightgray"
            }}
          >
            <img
              src={SingularCup1}
              style={{ width: "96px", height: "156px", objectFit: "fill" }}
            />
          </div>
          <p
            className="lead my-4 p-4 text-center"
            style={{ fontSize: "22px", lineHeight: "1", color: "darkgray" }}
          >
            We deliver you coffee, you choose{" "}
            <span style={{ color: "dimgray" }}>when</span>,{" "}
            <span style={{ color: "dimgray" }}>where</span>, and most
            importantly, <span style={{ color: "dimgray" }}>how</span> you like
            it
          </p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center align-self-end">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "128px",
              height: "256px",
              borderRadius: "64px",
              backgroundColor: "rgba(166,220,222,1)",
              boxShadow: "0px 4px 12px lightgray"
            }}
          >
            <img
              src={SingularCup2}
              style={{ width: "96px", height: "156px", objectFit: "fill" }}
            />
          </div>

          <p
            className="lead mt-4 p-4 text-center"
            style={{ fontSize: "22px", lineHeight: "1", color: "darkgray" }}
          >
            You can order the{" "}
            <span style={{ color: "dimgray" }}>perfect coffee</span> every time,
            and you get to{" "}
            <span style={{ color: "dimgray" }}>skip the lines</span>
          </p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center align-self-start">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "128px",
              height: "256px",
              borderRadius: "64px",
              backgroundColor: "rgba(166,220,222,1)",
              boxShadow: "-4px 4px 12px lightgray"
            }}
          >
            <img
              src={SingularCup3}
              style={{
                width: "96px",
                height: "156px",
                objectFit: "fill"
              }}
            />
          </div>
          <p
            className="lead mt-4 p-4 text-center"
            style={{ fontSize: "22px", lineHeight: "1", color: "darkgray" }}
          >
            You can earn{" "}
            <span style={{ color: "dimgray" }}>redeemable points</span> that can
            be used to order coffee for{" "}
            <span style={{ color: "dimgray" }}>free</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
  let [mobileVersion, setMobileVersion] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      setMobileVersion(false);
    } else {
      setMobileVersion(true);
    }
  }, []);

  return (
    <div className="row my-4">
      <img
        src={CoffeeSelection}
        className={`col${mobileVersion ? "" : "-6"} mr-4 mb-4`}
        style={{
          width: "336px",
          objectFit: "contain",
          backgroundColor: "rgba(196,154,108, 0.5)",
          borderRadius: "54px",
          padding: "56px",
          boxShadow: "2px 2px 24px lightgray"
        }}
      />
      {mobileVersion ? "" : <div className="col" />}
      <div className={`col${mobileVersion ? "" : "-5"} ml-4 my-auto`}>
        <p
          className="display-4 lead text-left"
          style={{
            fontSize: "2rem",
            height: "auto",
            lineHeight: "1",
            color: "#784421ff"
          }}
        >
          You can completely customize your cup of coffee from our selection of
          cafes near you
        </p>
        <p
          className="lead"
          style={{
            fontSize: "22px",
            lineHeight: "1",
            marginTop: "0",
            color: "darkgray"
          }}
        >
          You can also schedule a group order with your friends, delivered
          straight to where you decide to meet up
        </p>
      </div>
    </div>
  );
};

const Section3 = () => {
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
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ position: "relative" }}
    >
      <img src={Rewards} style={{ width: "100%", objectFit: "contain" }} />
      <div
        className={`d-flex flex-column align-items-center justify-content-center ${
          mobileVersion ? "" : "position-absolute"
        }`}
        style={{ marginTop: "72px" }}
      >
        <h6
          className="text-center"
          style={{
            fontSize: "32px",
            color: "#784421ff",
            top: "60%"
          }}
        >
          <span style={{ fontSize: "16px" }}>Earn</span>
          <br />
          Points
        </h6>
        <p
          className="lead text-center"
          style={{
            color: "darkgray",
            fontSize: "22px",
            top: "75%",
            width: "256px"
          }}
        >
          and spend them on more coffee!
        </p>
      </div>
      <p
        className="lead text-center"
        style={{
          color: "darkgray",
          fontSize: "22px",
          marginTop: mobileVersion ? "12px" : "128px",
          marginLeft: mobileVersion ? "12px" : "256px",
          marginRight: mobileVersion ? "12px" : "256px"
        }}
      >
        You can get more points by ordering coffee for your friends through our{" "}
        <i>Group Order</i> feature
      </p>
    </div>
  );
};

class Home extends Component {
  render() {
    return (
      <div className="m-4">
        <Jumbotron />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    );
  }
}

export default Home;

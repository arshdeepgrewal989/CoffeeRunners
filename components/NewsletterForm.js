import React, { Component } from "react";

class NewsletterForm extends Component {
  render() {
    return (
      <>
        <hr />
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            borderRadius: "24px",
            boxShadow: "2px 2px 24px lightgray",
            backgroundColor: "#784421ff",
            marginTop: "72px",
            marginBottom: "72px"
          }}
        >
          <h1
            className="display-4 text-center"
            style={{
              fontSize: "32px",
              color: "white"
            }}
          >
            <span style={{ fontSize: "16px" }}>Join Our</span>
            <br />
            Newsletter
          </h1>
          <p
            className="lead text-center"
            style={{ fontSize: "22px", color: "#491c00" }}
          >
            Upcoming features, updates, and new blog postings
          </p>
          <form className="d-flex flex-column justify-content-center align-items-center w-100 p-4">
            <div className="form-group w-100">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                style={{ borderRadius: "12px", width: "100%" }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-light btn-block"
              style={{
                borderRadius: "12px"
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
        <hr />
      </>
    );
  }
}

export default NewsletterForm;

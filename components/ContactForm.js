import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center pr-4 pl-4"
        style={{
          borderRadius: "24px",
          boxShadow: "2px 2px 24px lightgray",
          marginTop: "72px",
          marginBottom: "72px"
        }}
      >
        <h1
          className="display-4 lead"
          style={{
            fontSize: "32px",
            marginTop: "24px",
            fontWeight: 1000,
            color: "#784421ff"
          }}
        >
          Contact Us
        </h1>
        <p className="lead" style={{ fontSize: "22px", color: "darkgray" }}>
          We'll contact you back within 1-2 business days to set up a
          consultation
        </p>
        <form className="mt-4 d-flex flex-column justify-content-center align-items-center w-100">
          <div className="form-group w-100">
            <input
              className="form-control"
              type="text"
              style={{ borderRadius: "12px" }}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group w-100">
            <input
              className="form-control"
              type="text"
              style={{ borderRadius: "12px" }}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group w-100">
            <label
              className="lead"
              style={{ fontSize: "12px", color: "darkgray" }}
            >
              Message
            </label>
            <textarea
              class="form-control"
              rows="5"
              style={{ borderRadius: "12px" }}
              placeholder="Something about you, your company, and which days you'll be free for us to get back to you"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-outline-secondary btn-block"
            style={{
              borderRadius: "12px",
              marginBottom: "32px"
            }}
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

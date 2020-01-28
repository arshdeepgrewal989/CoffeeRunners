import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import TextLogo from "../images/text-logo-transparent.png";

const FooterNav = ({}) => (
  <ul
    className="navbar-nav flex-column flex-wrap mt-4"
    style={{ height: "128px" }}
  >
    <li className="nav-item">
      <Link href="/businesses">
        <a className="nav-link">For Businesses</a>
      </Link>
    </li>
    {/* <li className="nav-item">
      <Link href="/pricing">
        <a className="nav-link">Pricing</a>
      </Link>
    </li> */}
    <li className="nav-item">
      <Link href="/about">
        <a className="nav-link">About</a>
      </Link>
    </li>
    {/* <li className="nav-item">
      <Link href="/faq">
        <a className="nav-link">FAQ</a>
      </Link>
    </li> */}
    {/* <li className="nav-item">
      <Link href="/blog">
        <a className="nav-link">Blog</a>
      </Link>
    </li> */}
    <li className="nav-item">
      <Link href="/order">
        <a className={`nav-link`} style={{ borderRadius: "12px" }}>
          Order
        </a>
      </Link>
    </li>
  </ul>
);

const HeaderNav = ({ alignment, onClick }) => (
  <ul
    className={`navbar-nav flex-${alignment} align-items-${
      alignment === "column" ? "end w-100 mt-4" : "center"
    }`}
  >
    <li className="nav-item" onClick={onClick}>
      <Link href="/businesses">
        <a className="nav-link">For Businesses</a>
      </Link>
    </li>
    {/* <li className="nav-item" onClick={onClick}>
      <Link href="/pricing">
        <a className="nav-link">Pricing</a>
      </Link>
    </li> */}
    <li className="nav-item" onClick={onClick}>
      <Link href="/about">
        <a className="nav-link">About</a>
      </Link>
    </li>
    {/* <li className="nav-item" onClick={onClick}>
      <Link href="/faq">
        <a className="nav-link">FAQ</a>
      </Link>
    </li> */}
    {/* <li className="nav-item" onClick={onClick}>
      <Link href="/blog">
        <a className="nav-link">Blog</a>
      </Link>
    </li> */}
    <li className="nav-item" onClick={onClick}>
      <Link href="/order">
        <a
          className={`nav-link btn btn-outline-secondary p-4`}
          style={{ borderRadius: "12px" }}
        >
          Order
        </a>
      </Link>
    </li>
  </ul>
);

const Fab = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-transparent"
      style={{ padding: "8px" }}
    >
      <FontAwesomeIcon
        icon={faBars}
        style={{
          fontSize: "24px",
          margin: "0",
          height: "32px",
          width: "32px"
        }}
      />
    </button>
  );
};

const Nav = ({ alignment, showFab }) => {
  let [showFabMenu, setShowFabMenu] = React.useState(false);
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        <img
          src={TextLogo}
          style={{ width: alignment === "vertical" ? "256px" : "128px" }}
        />
      </a>
      {showFab ? (
        <>
          <Fab onClick={() => setShowFabMenu(!showFabMenu)} />
          {showFabMenu ? (
            <HeaderNav
              alignment="column"
              onClick={() => setShowFabMenu(false)}
            />
          ) : (
            ""
          )}
        </>
      ) : alignment === "vertical" ? (
        <FooterNav />
      ) : (
        <HeaderNav alignment="row" />
      )}
    </nav>
  );
};

export default Nav;

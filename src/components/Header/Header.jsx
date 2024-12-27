"use client";

import React from "react";

const Header = () => {
  const collections = [
    "RATTAN",
    "SOSIS",
    "LUMINOUS",
    "ARTISAN",
    "MARBLE",
    "AMAZON",
    "INGESIMONIS",
  ];
  return (
    <header className="container container-fluid section text-center">
      <h1 className="text-xl text-md-xxl">EXPLORE OUR COLLECTIONS</h1>
      <nav>
        <ul className="navbar-nav d-flex flex-row justify-content-center gap-5 fs-4 scrollable">
          {collections.map((item, index) => {
            if (index === 0) {
              return (
                <li className="nav-item position-relative" key={index}>
                  <a className="nav-link" aria-current="page" href="#">
                    {item}
                  </a>
                  <div className="bg-faded-white reverse" />
                </li>
              );
            } else if (index === collections.length - 1) {
              return (
                <li className="nav-item  position-relative" key={index}>
                  <a className="nav-link" aria-current="page" href="#">
                    {item}
                  </a>
                  <div className="bg-faded-white" />
                </li>
              );
            } else {
              return (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link ${item === "ARTISAN" ? "active" : ""}`}
                    aria-current="page"
                    href="#"
                  >
                    {/* <a className="nav-link active" aria-current="page" href="#"> */}
                    {item}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

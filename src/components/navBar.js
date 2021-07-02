import React, { Component } from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.linkedin.com/in/koya-mitchell-3109b3111/"
              >
                LinkedIn
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mailto: koyam55@yahoo.com">
                Email: koyam55@yahoo.com
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;

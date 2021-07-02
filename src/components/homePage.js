import { Typography } from "@material-ui/core";
//import React, { Component } from "react";
import portrait from "../images/portrait.jpg";
import Button from "@material-ui/core/Button";
import "./homePage.css";

const Homepage = () => (
  <div className="Homepage">
    <div className={"main-subject"}>
      <img className={"portrait-img"} src={portrait} alt={"KoyaMitchell"} />
      <Typography
        style={{ paddingTop: 1 + "em", paddingBottom: 1 + "em" }}
        variant={"h3"}
      >
        Koya Mitchell
      </Typography>

      <Button
        variant={"contained"}
        color={"secondary"}
        href={"/aboutme"}
        style={{
          maxWidth: 20 + "em",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography variant={"h3"}>About Me</Typography>
      </Button>

      <br />
      <br />
      <Button
        variant={"contained"}
        color={"secondary"}
        href={"/resume"}
        style={{
          maxWidth: 20 + "em",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography variant={"h3"}>Resume</Typography>
      </Button>
    </div>
  </div>
);

export default Homepage;

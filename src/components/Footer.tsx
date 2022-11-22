import * as React from "react";
import { useState } from "react";

type Props = {};

const Footer = (props: Props) => {
  const today = new Date();
  const footerStyle = {
    backgroundColor: "#000080",
    color: "#edeaed",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    // textAlign: "center" as const,     // I had to go through the pain in the ass things to fix this textAlign thing
    display: "grid",
    placeContent: "center",
    padding: "0.25em",
    fontSize: "14px",
  };

  return (
    <div style={footerStyle}>
     <h3> Copyright &copy; {today.getFullYear()} </h3>
    </div>
  );
};

export default Footer;

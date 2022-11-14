import * as React from "react";
import { useState } from "react";

type Props = {};

const Footer = (props: Props) => {
  const today = new Date();
  const footerStyle = {
    backgroundColor: "#0c65f4",
    color: "#8597b5",
    width: "full",
    height: "100%",
    justifyContent: "space-between",
    textAlign: "center" as const,     // I had to go through the pain in the ass things to fix this textAlign thing
  };

  return (
    <div style={footerStyle}>
     <h3> Copyright &copy; {today.getFullYear()} </h3>
    </div>
  );
};

export default Footer;

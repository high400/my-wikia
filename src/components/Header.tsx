import React, { useState } from "react";
import "../App.css";

type Props = {};

const Header = (props: Props) => {
  const headerStyle = {
    backgroundColor: "#000080",
    // The "#0000cd" code is for "medium blue"
    color: "#edeaed",
    // The "#F0F8FF" code is for "alice blue"
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    fontSize: "14px",
    placeContent: "center", 
    // The "place content" is the one that can align your text in the center, not "text align"
    padding: "0.25em",
  };

  return (
    <div style={headerStyle}>
      List of mangas that I love to read
    </div>
  );
};

export default Header;

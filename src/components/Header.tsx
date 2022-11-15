import React, { useState } from "react";
import "../App.css";

type Props = {};

const Header = (props: Props) => {
  const headerStyle = {
    backgroundColor: "#b195f4",
    color: "#500cf4",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    textAlign: "center" as const
  };

  return (
    <div style={headerStyle}>
      <h1>List of mangas that I love to read</h1>
    </div>
  );
};

export default Header;

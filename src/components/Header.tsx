import React, { useState } from "react";
import "../App.css";

type Props = {};

const Header = (props: Props) => {
  const headerStyle = {
    backgroundColor: "#b195f4",
    color: "#500cf4",
    width: "full",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    
  };

  return (
    <div style={headerStyle}>
      <h1>List of mangas that I love to read</h1>
    </div>
  );
};

export default Header;

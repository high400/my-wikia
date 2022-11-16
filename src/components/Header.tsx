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
    textAlign: "center" as const,
    fontSize: "20px",
  };

  return (
    <div className="header">
      List of mangas that I love to read
    </div>
  );
};

export default Header;

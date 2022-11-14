import React, { useState } from "react";
import kangLiu from "../assets/revenant_kang_liu_1.png";
import "../App.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <a
        href="https://kenganverse.fandom.com/wiki/Kengan_Ashura_(manga)"
        target="_blank"
      >
        <img src={kangLiu} className="logo" alt="React logo" />
      </a>
    </div>
  );
};

export default Header;

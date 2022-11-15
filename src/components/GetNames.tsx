import React, { useState } from "react";
import "../App.css";

type Props = {};

const GetNames = (props: Props) => {
  const [names, setNames] = useState("Hung");

  const handleName = () => {
    const names = ["Hung", "Hoang", "Minh", "Trang", "Hien", "Thuy Linh"];
    const int = Math.floor(Math.random() * 6);
    setNames(names[int]);
  };

  const handleClick = (e: any) => {
    // alert(e.target.innerText);
    alert ("Hah, you suckers. You clicked on it. It was a clickbait to bait you, mwa ha ha ha ha ha")
  };

  return (
    <>
      <div className="container">
        <p>Hello {names}</p>
        {/* The "handleName" function generates the name of each person within the array that I created         */}
        <button onClick={handleName}>Change the name</button>
        {/* When I click on this button, the name will change  */}
        <button onClick={handleClick}>Show the alert</button>
      </div>
    </>
  );
};

export default GetNames;

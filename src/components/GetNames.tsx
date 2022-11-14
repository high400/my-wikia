import React from "react";
import "../App.css";


type Props = {};

const GetNames = (props: Props) => {
  const handleName = () => {
    const names = ["Hung", "Hoang", "Minh", "Trang", "Hien", "Thuy Linh"];
    const int = Math.floor(Math.random() * 6);
    return names[int];
  };

  return (
    <>
      <div className="container">
        <p>Hello {handleName()}</p>
        {/* The "handleName" function generates the name of each person within the array that I created         */}
      </div>
    </>
  );
};

export default GetNames;

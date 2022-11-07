import React from "react";
import "../App.css";


type Props = {};

const GetNames = (props: Props) => {
  const handleName = () => {
    const names = ["Hung", "Hoang", "Minh", "Tuan", "Vuong", "Hinh"];
    const int = Math.floor(Math.random() * 6);
    return names[int];
  };

  return (
    <>
      <div className="container">
        <p>Hello {handleName()}</p>
      </div>
    </>
  );
};

export default GetNames;

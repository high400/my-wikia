import React, { useState } from "react";
import "../App.css";
import {FaTrashAlt} from "react-icons/fa";

type Props = {};

const GetNames = (props: Props) => {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "item 1" },
    { id: 2, checked: false, item: "item 2" },
    { id: 3, checked: false, item: "item 3" },
    { id: 4, checked: false, item: "item 4" }
  ]);

  return (
    <>
      <div className="container">
        <ul>
         {items.map((item) => (
          <li key={item.id} className="item">
            <input type="checkbox" />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
         ))}
        </ul>
      </div>
    </>
  );
};

export default GetNames;

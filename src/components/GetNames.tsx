import React, { useState } from "react";
import "../App.css";
import { FaTrashAlt } from "react-icons/fa";

type Props = {};

const GetNames = (props: Props) => {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "Dragon Quest" },
    { id: 2, checked: false, item: "Naruto" },
    { id: 3, checked: false, item: "Kengan Ashura/Omega" },
    { id: 4, checked: false, item: "One Piece" },
    { id: 5, checked: false, item: "Fast and Furious - The Saga" },
    {
      id: 6,
      checked: false,
      item: "WATAKUSHI NO OTTO WA REITOU KONI NEMUTEIRU",
    },
  ]);

  const handleCheck = (id: any) => {
    // console.log(`key: ${id}`)
    // The log above was just to see what it is returned, nothing more
    // We also need to "useState" in this situation, mwa ha ha ha ha.............
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    // Remember, we used "map" for array methods, so we are gonna write it accordingly
    localStorage.setItem("mangalist", JSON.stringify(listItems));
    // Keep in mind, I am saving this to local storage using the "localStorage" line above. I temporary forgot about local storage, but that is fine.
    // I will find out about it later. Just know that for now, I will save this thing to local storage so that I can pull it back later.
  };

  const handleDelete = (id: any) => {
    const listItems = items.filter((item) => item.id !== id);
    // this function, in general, is used for the trash icon. And that icon will fullfill the duty of deleting stuff that I do  not like.
    setItems(listItems);
    localStorage.setItem("mangalist", JSON.stringify(listItems));
  };

  return (
    <>
      {/* <div className="container"> */}
        {items.length ? (
          <ul>
            {items.map((item) => (
              <li key={item.id} className="item">
                <input type="checkbox" onChange={() => handleCheck(item.id)} />
                {/* The "onChange" event here is to see what is going on in the console */}
                <label
                  style={
                    item.checked ? { textDecoration: "line-through" } : null
                  }
                  // onDoubleClick={() => handleCheck(item.id)}
                  // I am not using this onDoubleClick function because it is very stupid and confusing. Just use the onClick in this case, that is sufficient
                >
                  {item.item}
                </label>
                {/* I had to add "null" as one of the defined value in index.d.ts file   */}
                <FaTrashAlt
                  onClick={() => handleDelete(item.id)}
                  role="button"
                  tabIndex="0"
                />
                {/* This is the icon of react. I had to install it using npm. Just don't tell anyone =))))))) */}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
        )}
      {/* </div> */}
    </>
  );
};

export default GetNames;

import React, { useState} from "react";
import "../App.css";


type Props = {};

const ClickBait = (props: Props) => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <button onClick={() => setNumber((number) => number - 1)}>
        number is {number}
      </button>
    </div>
  );
};

export default ClickBait;

import React, { useState} from "react";
import "../App.css";


type Props = {};

const ClickBait = (props: Props) => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <div className="card">
      {/* This div contains two buttons to click on. When you click on them, the number of the times you press, will appear. */}
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <button onClick={() => setNumber((number) => number - 1)}>
        number is {number}
      </button>
            {/* This div contains two buttons to click on. When you click on them, the number of the times you press, will appear. */}
    </div>
  );
};

export default ClickBait;

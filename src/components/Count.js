import React, { useState, useEffect } from "react";

function Count() {
  let ans = JSON.parse(localStorage.getItem("myNumber"));

  const [number, setNumber] = useState(ans);
  const [display, setDisplay] = useState(0);

  const add = () => {
    setNumber(number + 1);
  };
  const remove = () => {
    setNumber(number - 1);
  };

  useEffect(() => {
    if (number === null) {
      localStorage.setItem("myNumber", 0);
    } else {
      localStorage.setItem("myNumber", number);
    }
  }, [number]);

  useEffect(() => {
    let numb = localStorage.getItem("myNumber");
    setDisplay(JSON.parse(numb));
  }, [number]);

  return (
    <div className="count">
      <button onClick={() => remove()}>-</button>
      <p>{display}</p>
      <button onClick={() => add()}>+</button>
    </div>
  );
}

export default Count;

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIn = () => { //increase
    setCount(prevCount => prevCount + 1);
  };
  const onDe = () => { //decrease
    setCount(prevCount => prevCount - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={onIn}>+1</button>
      <button onClick={onDe}>-1</button>
    </>
  );
};

export default Counter;
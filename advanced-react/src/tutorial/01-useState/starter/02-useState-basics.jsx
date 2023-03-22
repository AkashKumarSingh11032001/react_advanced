import { useState } from "react";
// useState : ["default value","function to manipulate default value"]

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick_Increment = () => {
    setCount(count + 1);
  };
  const handleClick_Decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h2>current Count : {count}</h2>
        <button type="button" className="btn" onClick={handleClick_Increment}>
          Increment
        </button>
        <button type="button" className="btn" onClick={handleClick_Decrement}>
          Decrement
        </button>
    </>
  );
};

export default UseStateBasics;

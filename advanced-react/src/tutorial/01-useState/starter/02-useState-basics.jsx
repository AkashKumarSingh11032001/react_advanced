import { useState } from "react";
// useState : ["default value","function to manipulate default value"]

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count+1);
  }
  return (
    <>
      <h2>current Count : {count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Increment
      </button>
    </>
  );
};

export default UseStateBasics;

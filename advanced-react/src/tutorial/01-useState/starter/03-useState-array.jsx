import { data } from "../../../data";
import { useState } from "react";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeitem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h1>{name}</h1>
            <button
              type="button"
              className="btn"
              onClick={() => removeitem(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        onClick={clearAllItems}
        style={{ marginTop: "5rem", width: "10rem" }}
      >
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;

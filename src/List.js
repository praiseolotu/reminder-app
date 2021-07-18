import React, { useState } from "react";
import data from "./data";
const List = () => {
  const [people, setPeople] = useState(data);
  const rem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <>
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
            <button onClick={() => rem(id)}>remove</button>
          </article>
        );
      })}
      <button
        onClick={() => {
          setPeople([]);
        }}
      >
        clear all
      </button>
    </>
  );
};

export default List;

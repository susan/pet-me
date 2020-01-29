import React, { useState } from "react";

export const RetrievePetsForm = ({ petCriteriaSubmitHandler }) => {
  const ANIMALS = ["cat", "dog", "bird", "horse", "somethingelse"];
  const [location, updateLocation] = useState("");
  const [animalType, updateAnimalType] = useState("");

  const handleSubmit = event => {
    console.log("is this working");
    event.preventDefault();
    petCriteriaSubmitHandler(event, Location, AnimalType);
  };

  return (
    <div className="retrieve-Form">
      <h2> Describe the animal you want: </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Location">
          City, State
          <input
            type="text"
            placeholder="Sioux City, Iowa"
            name="Location"
            id="Location"
            value={location}
            onChange={event => updateLocation(event.target.value)}
            onBlur={event => updateLocation(event.target.value)}
          />
        </label>

        {/* <label htmlFor="animal-type">
          Animal
          <select
            name="AnimalType"
            id="animalType"
            value={animalType}
            onChange={event => updateAnimalType(event.target.value)}
            onBlur={event => updateAnimalType(event.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal, i) => (
              <option id={i} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label> */}
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

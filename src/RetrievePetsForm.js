import React, { useState } from "react";

export const RetrievePetsForm = ({ petCriteriaSubmitHandler }) => {
  const [Location, updateLocation] = useState("");
  const [AnimalType, updateAnimalType] = useState("");

  // const handleChange = (event) => {
  //
  // }

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
            value={Location}
            onChange={event => updateLocation(event.target.value)}
            onBlur={event => updateLocation(event.target.value)}
          />
        </label>

        <label htmlFor="animal-type">
          Animal
          <select
            name="AnimalType"
            value={AnimalType}
            onChange={event => updateAnimalType(event.target.value)}
            onBlur={event => updateAnimalType(event.target.value)}
          >
            <option value="Cat"> Cat</option>
            <option value="Dog"> Dog</option>
            <option value="Bird"> Bird</option>
            <option value="Horse"> Horse</option>
          </select>
        </label>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

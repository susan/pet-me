import React, { useState } from "react";

export const RetrievePetsForm = ({ petCriteriaSubmitHandler }) => {
  const ANIMALS = ["dog", "cat", "horse"];
  const [location, updateLocation] = useState("");
  const [animalType, updateAnimalType] = useState("");
  const [breeds, updateBreeds] = useState([]);
  const [selectedBreed, updateSelectedBreed] = useState("");
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
        <label htmlFor="location">
          City, State
          <input
            type="text"
            placeholder="Sioux City, Iowa"
            name="location"
            id="location"
            value={location}
            onChange={e => updateLocation(e.target.value)}
            onBlur={e => updateLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal-type">
          Animal
          <select
            name="animalType"
            id="animalType"
            value={animalType}
            onChange={e => updateAnimalType(e.target.value)}
            onBlur={e => updateAnimalType(e.target.value)}
          >
            <option> All</option>
            {ANIMALS.map((animal, i) => (
              <option key={i} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed-type">
          Breed
          <select
            name="breedType"
            id="breedType"
            value={selectedBreed}
            onChange={e => updateSelectedBreed(e.target.value)}
            onBlur={e => updateSelectedBreed(e.target.value)}
            disabled={!breeds.length}
          >
            <option> All </option>
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

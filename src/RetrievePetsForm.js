import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown";

export const RetrievePetsForm = ({
  petCriteriaSubmitHandler,
  ANIMALS,
  TOKEN
}) => {
  const [breeds, updateBreeds] = useState([]);
  const [animalType, AnimalDropdown] = useDropdown(
    "animalType",
    "cat",
    ANIMALS
  );
  const [selectedBreed, BreedDropdown, updateSelectedBreed] = useDropdown(
    "selectedBreed",
    "",
    breeds
  );

  const [location, updateLocation] = useState("Sioux City, Iowa");

  useEffect(() => {
    updateBreeds([]);
    updateSelectedBreed("");
    const url = `https://api.petfinder.com/v2/types/${animalType}/breeds`;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(r => r.json())
      .then(({ breeds }) => {
        const breedTypes = breeds.map(({ name }) => name);
        updateBreeds(breedTypes);
      }, console.error);
  }, [animalType]);

  const handleSubmit = e => {
    console.log("is this working", selectedBreed);
    petCriteriaSubmitHandler(e, location, animalType, selectedBreed);
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
        <AnimalDropdown />
        <BreedDropdown />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

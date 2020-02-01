import React, { useState, useEffect } from "react";
import "./App.css";
import { PetList } from "./PetList";

import { RetrievePetsForm } from "./RetrievePetsForm";

const TOKEN = `${process.env.REACT_APP_API_TOKEN}`;

export const App = props => {
  const ANIMALS = ["dog", "cat", "horse"];
  const [animals, setAnimals] = useState([]);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    const url =
      "https://api.petfinder.com/v2/animals?type=cat&location=Sioux City, Iowa";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(r => r.json())
      .then(data => {
        setAnimals(data.animals);
      });
  }, []);

  // componentDidMount() {
  //   const url = "https://api.petfinder.com/v2/animals?type=dog&page=2";
  //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //   fetch(proxyurl + url, {
  //     headers: {
  //      "Authorization": `Bearer ${TOKEN}`
  //     }
  //   })
  //  .then(r=> r.json())
  //  .then(data=>{
  //    this.setState({
  //      Animals: data.animals,
  //      Loaded: true,
  //    })
  //  })
  // }

  const petCriteriaSubmitHandler = (e, location, animalType, selectedBreed) => {
    e.preventDefault();
    setAnimals([]);
    console.log("is clicked");
    console.log(selectedBreed);
    console.log(location);
    const url = `https://api.petfinder.com/v2/animals?type=${animalType}&location=${location}&breed=${selectedBreed}`;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(r => r.json())
      .then(userPetCriteria => setAnimals(userPetCriteria.animals));
  };

  return (
    <div className="App">
      <div className="container">
        <RetrievePetsForm
          petCriteriaSubmitHandler={petCriteriaSubmitHandler}
          ANIMALS={ANIMALS}
          TOKEN={TOKEN}
        />
        {!animals ? (
          <div> Loading Pet Choices ...</div>
        ) : (
          <PetList Animals={animals} />
        )}
      </div>
    </div>
  );
};

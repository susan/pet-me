import React, { Component } from 'react';
import './App.css';
import { Pet } from './Pet';
import { PetData } from './PetData';
import RetrievePetsForm from'./RetrievePetsForm';

const TOKEN = `${process.env.REACT_APP_API_TOKEN}`

export default class App extends Component {

   petCriteriaSubmitHandler = (event, petCriteria) => {
    event.preventDefault()
    const url =`https://api.petfinder.com/v2/animals?type=${petCriteria.animalType}&page=2&location=${petCriteria.location}`
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + url, {
      headers: {
        "Authorization": `Bearer ${TOKEN}`
      }
    })
   .then(r=> r.json())
   .then(r=> console.log(r))
   }
  render() {
    return (
      <div className="App">
        <div className="container">
          <RetrievePetsForm petCriteriaSubmitHandler={this.petCriteriaSubmitHandler} /  >
          <Pet petData={PetData} />
        </div>
      </div>
    );
  }
}


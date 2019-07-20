import React, { useState, useEffect } from 'react';
import './App.css';
import { PetList } from './PetList';
//import { PetData } from './PetData';
import  { RetrievePetsForm } from'./RetrievePetsForm';

const TOKEN = `${process.env.REACT_APP_API_TOKEN}`

export const App = (props) => {

const [Animals, setAnimals] = useState([]);
const [Loaded, setLoaded] =useState(false)


    useEffect ( () => {
      const url = "https://api.petfinder.com/v2/animals?type=cat&page=2";
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyurl + url, {
         headers: {
         "Authorization": `Bearer ${TOKEN}`
        }
      })
     .then(r=> r.json())
     .then(data=>{
       setAnimals(data.animals)
      })
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

   const petCriteriaSubmitHandler = (event, Location, AnimalType) => {
     event.preventDefault()
     console.log("is this clicked?")
      const url =`https://api.petfinder.com/v2/animals?type=${AnimalType}&page=2&location=${Location}`
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyurl + url, {
        headers: {
         "Authorization": `Bearer ${TOKEN}`
       }
      })
      .then(r=> r.json())
      .then(userPetCriteria=> setAnimals(userPetCriteria.animals)
      )
   }


    return (
      <div className="App">
        <div className="container">
          <RetrievePetsForm petCriteriaSubmitHandler={petCriteriaSubmitHandler}  />
          {!Animals
            ?
            (<div> Loading Pet Choices ...</div>)
            :
            (<PetList Animals={Animals} />)
           }
        </div>
      </div>
    );

}


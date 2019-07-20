import React, { Component } from 'react';
import './App.css';
import { PetList } from './PetList';
//import { PetData } from './PetData';
import  { RetrievePetsForm } from'./RetrievePetsForm';

const TOKEN = `${process.env.REACT_APP_API_TOKEN}`

export default class App extends Component {

state= {
  Animals: [],
  Loaded: false,
}

   componentDidMount() {
     const url = "https://api.petfinder.com/v2/animals?type=dog&page=2";
     const proxyurl = "https://cors-anywhere.herokuapp.com/";
     fetch(proxyurl + url, {
       headers: {
        "Authorization": `Bearer ${TOKEN}`
       }
     })
    .then(r=> r.json())
    .then(data=>{
      this.setState({
        Animals: data.animals,
        Loaded: true,
      })
    })
   }

   petCriteriaSubmitHandler = (event, Location, AnimalType) => {
    event.preventDefault()
    const url =`https://api.petfinder.com/v2/animals?type=${AnimalType}&page=2&location=${Location}`
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + url, {
      headers: {
        "Authorization": `Bearer ${TOKEN}`
      }
    })
   .then(r=> r.json())
   .then(userPetCriteria=> this.setState({Animals: userPetCriteria.animals}))
   }

  render() {
    return (
      <div className="App">
        <div className="container">
          <RetrievePetsForm petCriteriaSubmitHandler={this.petCriteriaSubmitHandler} /  >
          {!this.state.Animals
            ?
            (<div> Loading Pet Choices ...</div>)
            :
            (<PetList Animals={this.state.Animals} />)
           }
        </div>
      </div>
    );
  }
}


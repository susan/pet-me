import React, {Component} from 'react';


export default class RetrievePetsForm extends Component {
    state = {
      location: "",
      animalType: "",
    }

   handleChange = (event) => {
     this.setState ({
     	[event.target.name]: event.target.value
     })
   }

   handleSubmit = (event) => {
   	console.log("is this working")
   	event.preventDefault()
   	this.props.petCriteriaSubmitHandler(event, this.state)
   }

  render() {
  	 console.log(this.state)
	   return(
	   	<div className="retrieve-Form">
	   	 <h2>  Describe the animal you want:  </h2>
       <form onSubmit={this.handleSubmit}>
       <label htmlFor="location">
        City, State
         <input
            type="text"
            placeholder="Sioux City, Iowa"
            name= "location"
            value={this.state.location}
            onChange={this.handleChange}
         />
         </label>

         <label htmlFor="animal-type">
         Animal
         <select name="animalType" onChange={this.handleChange}>
           <option value="Cat"> Cat</option>
           <option value="Dog"> Dog</option>
         </select>
         </label>
         <button type="submit"> Submit </button>
       </form>
     </div>
		 )
  }

}

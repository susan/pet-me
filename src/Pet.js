import React from 'react';

export const Pet = (props) => {
  	return (
      <div className="pet">
      <h2> A pet for you! </h2>
  		<h4> name: {props.petData.animals[0].name} </h4>
      <h4> age: {props.petData.animals[0].age} </h4>
      <h4> gender: {props.petData.animals[0].gender} </h4>
      <img className='image-container' src={props.petData.animals[0].photos[0].medium} alt=""/>
  		</div>
  		)
}

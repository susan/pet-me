import React from 'react';

export const Pet = (props) => {
  	return (
      <div className="pet">
      <h2> A pet for you! </h2>
  		<h4> name: {props.pet.name} </h4>
      <h4> age: {props.pet.age} </h4>
      <h4> gender: {props.pet.gender} </h4>
      {props.pet.photos.length !==0
        &&
        <img className='image-container' src={props.pet.photos[0].small} alt=""/>
  		}
  		</div>
  		)
}
